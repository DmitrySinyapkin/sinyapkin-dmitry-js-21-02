const fs = require("fs");

class FileRepository {
    getTextFromFile() {
        fs.readFile('../../files/file', 'utf8', (error, data) => {
            if (error) {
                console.log(error);
            } else {
                return data;
            }
        });
    }

    saveTextToFile(text) {
        fs.writeFile('../../files/file', text, (error) => {
            if (error) console.log(error);
        });
    }
}

module.exports = new FileRepository();
