const fs = require('fs/promises');

async function getDigimons() {
  const data = await fs.readFile('./digimons.json', 'utf8')
   const digimons = await JSON.parse(data);
   return digimons;
}

async function setDigimons(newDigimon) {
    return fs.writeFile('./digimons.json', JSON.stringify(newDigimon));
}

module.exports = {  getDigimons, setDigimons };

