//console.log('index.js');

const express = require('express');
const app = express();
const port = 3000;

require('dotenv/config');
const api = process.env.API_URL;

//http://localhost:3000/api/v1/products
app.get(api + '/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(api);
    console.log(`Example app listening at http://localhost:${port}`);
});

