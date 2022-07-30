const express = require('express');

const bodyParser = require('body-parser');

const { getDigimons, setDigimons } = require('./digimon.js');

const app = express();

app.use(bodyParser.json());

app.get('/digimons', async (req, res) => {
    try {
        const digimons = await getDigimons();
        return res.status(200).json(digimons);
    }
    catch (err) {
        return res.status(500).json({ "message": "Internal Server Error" });
    }
});

app.get('/digimons/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const digimons = await getDigimons();
        const digimon = digimons.find(digimon => digimon.name.toLowerCase() === name.toLowerCase());
        if (!digimon) {
            return res.status(404).json({ "message": "Digimon not found" });
        }
        return res.status(200).json(digimon);
    }
    catch (err) {
        return res.status(500).json({ "message": "Internal Server Error" });
    }
})

app.post('/digimons', async (req, res) => {
    try {
        const { name, img, level } = req.body;
        const newDigimon = { name, img, level };
        const digimons = await getDigimons();
        const digimon = digimons.find(digimon => digimon.name.toLowerCase() === name.toLowerCase());
        if (digimon) {
            return res.status(409).json({ "message": "Digimon already exists" });
        }
        digimons.push(newDigimon);
        await setDigimons(digimons);
        return res.status(204).end();
    } catch (err) {
        return res.status(500).json({ "message": "Internal Server Error" });
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});