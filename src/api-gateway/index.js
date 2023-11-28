const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const getMicroservicePath = (path) => {
    if (path.includes('/pokemons')) {
        return `http://pokemons:3001${path}`;
    }

    if (path.includes('/pokemon-types')) {
        return `http://pokemon-types:3002${path}`;
    }

    if (path.includes('/legendary-pokemon')) {
        return `http://legendary-pokemon:3004${path}`;
    }

    return `http://trainers:3003${path}`;
}

app.use(express.json());

app.all('*', async (req, res) => {
    const { path, method, query, body } = req;

    const urlPath = getMicroservicePath(path);

    const response = await axios({
        url: urlPath,
        method,
        data: body,
        params: query,
    });

    res.status(200)
        .json({
            data: response.data,
        })
});

app.listen(port, () => {
    console.log(`API Gateway listening at http://localhost:${port}`);
});