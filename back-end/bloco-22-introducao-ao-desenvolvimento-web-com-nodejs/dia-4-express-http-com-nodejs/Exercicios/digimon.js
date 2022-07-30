const fs = require('fs/promises');

async function getDigimons() {
  const data = await fs.readFile('./digimons.json', 'utf8')
   const digimons = await JSON.parse(data);
   return digimons;
}

async function setDigimons(newDigimon) {
    const data = await fs.readFile('./digimons.json', 'utf8')
    const digimons = await JSON.parse(data);
    digimons.push(newDigimon);
    return fs.writeFile('./digimons.json', JSON.stringify(digimons));
}

module.exports = {  getDigimons, setDigimons };

