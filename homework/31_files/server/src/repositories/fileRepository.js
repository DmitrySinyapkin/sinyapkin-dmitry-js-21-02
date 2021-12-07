const fs = require("fs");

class FileRepository {
    getTextFromFile() {
        return fs.readFileSync('files/file.txt', 'utf8');
    }

    saveTextToFile(text) {
        fs.writeFile('files/file.txt', text, (error) => {
            if (error) console.log(error);
        });
    }
}

module.exports = new FileRepository();
