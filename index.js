//console.log('index.js');

const express = require('express');
const app = express();
const port = 3000;

require('dotenv/config');
const api = process.env.API_URL;

//middleware for express to parse the body of the request
//this replaces body-parser
app.use(express.json());

//http://localhost:3000/api/v1/products
app.get(api + '/products', (req, res) => {
    const product = {
        id: 1,
        name: 'hair dresser',
        image: 'some url'
    };
    res.send(product);
});

app.listen(port, () => {
    console.log(api);
    console.log(`Example app listening at http://localhost:${port}`);
});

