const fs = require('fs').promises;

const readFile = async () => {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf8');
    const json = JSON.parse(data);
    return json.map(({ id, name }) => `${id} - ${name}`);
  } catch (error) {
    console.log(error);
  }
};

const findSimpson = async (id) => {
  return new Promise(async (resolve, reject) => {
   const data = await fs.readFile('./simpsons.json', 'utf8');
   const json = JSON.parse(data);
   const simpson = json.find((simpson) => Number(simpson.id) === id);
    if (!simpson) {
      reject(new Error('id não encontrado'));
    }
    resolve(simpson);
})};

const filterSimpson = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf8');
  const json = JSON.parse(data);
  const simpsons = json.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(simpsons));
}

const updateSimpson = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf8');
  const json = JSON.parse(data);
  const newSimpsons = json.filter(simpson => simpson.id === '1' || simpson.id === '2' || simpson.id === '3' || simpson.id === '4');
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsons));
}

const updateSimpsonsFamily = async () => {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf8');
  const simpsonsFamily = JSON.parse(fileContent);
  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily));
}

const updateNelson = async () => {
  const data = await fs.readFile('./simpsonFamily.json', 'utf8');
  const json = JSON.parse(data);
  const filter = json.filter(simpson => simpson.id !== '5');
  const newSimpson = { id: '5', name: 'Maggie Simpson' };
  const result = [...filter, newSimpson];
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(result));
}

const main = async () => {
  try {
    const simpson = await findSimpson(1);
    console.log(simpson);
  } catch (error) {
    console.log(error.message);
  }
  filterSimpson();
  updateSimpson();
  updateSimpsonsFamily()
  updateNelson();
};

main();