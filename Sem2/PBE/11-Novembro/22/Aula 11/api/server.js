const express = require('express');
const cors = require('cors');

const app = express();
const router = require('./src/routes.js');

app.use(cors());
app.use(express.json());
app.use (router);

app.listen(5000, () => {
    console.log('API produtos composição executando em http://localhost:5000');  
})