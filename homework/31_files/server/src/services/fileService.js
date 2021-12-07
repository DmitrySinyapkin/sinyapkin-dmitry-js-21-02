const FileRepository = require('../repositories/fileRepository');

class FileService {
    getTextFromFile(req, res) {
        try {
            res.status(200).send(FileRepository.getTextFromFile());
        } catch(err) {
            res.status(520).send(err);
        }
    }

    saveTextToFile(req, res) {
        FileRepository.saveTextToFile(req.body.text);
        res.status(200).send('File saved')
    }
}

module.exports = new FileService();
