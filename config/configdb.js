const dotenv = require('dotenv');
const path = require('path');


dotenv.config({
    path: path.resolve(__dirname, 'database.env')
});

const db_data = {

    ENV_host: process.env.ENV_HOST,
    ENV_user: process.env.ENV_USER,
    ENV_password: process.env.ENV_PASSWORD,
    ENV_database: process.env.ENV_DATABASE
}

module.exports = db_data