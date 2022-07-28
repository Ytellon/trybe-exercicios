const fs = require('fs');

function writeFile(fileName, content) {
    try {
        fs.writeFileSync(fileName, content);
        return 'ok';
    } catch (error) {
        return null;
    }
}

module.exports = writeFile;
