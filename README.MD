//
npm init -y
create index.js
    place console.log("index.js") in code
indtall nodemon - npm i nodemon --save-dev
run npm run start
install express - npm i express --save-dev
//
const express = require('express');
const app = express();
const port = 3000;
//
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//
environment variables
create .env
API_URL= /api/v1
install dotenv - npm i dotenv --save-dev
require('dotenv/config');
const api = process.env.API_URL;

https://github.com/jimmuell/backend.git