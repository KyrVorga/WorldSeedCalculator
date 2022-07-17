import { promises as fs } from 'fs';

const getCreatureStats = async () => {
    const data = await fs.readFile('./src/json/creatureStats.json', (err, data) => {
        if (err) throw err;
    });
    return JSON.parse(data.toString());
  }
  
const creatureStats = getCreatureStats();
creatureStats.then(data => console.log(data))