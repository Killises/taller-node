const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const path = require('path');


dotenv.config({
    path: path.resolve(__dirname, 'jwt.env')
});

const key = {
    ENV_TOKEN: process.env.ENV_TOKEN
};

module.exports = key