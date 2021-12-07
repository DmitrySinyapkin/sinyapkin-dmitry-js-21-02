const FileRepository = require('../repositories/fileRepository');

class FileService {
    getTextFromFile(req, res) {
        res.status(200).send(FileRepository.getTextFromFile());
    }

    saveTextToFile(req, res) {
        FileRepository.saveTextToFile(req.body.text);
        res.status(200).send('File saved')
    }
}

module.exports = new FileService();
