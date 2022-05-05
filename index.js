const bodyParser = require('body-parser')
const morgan = require('morgan');
const express = require('express');
const app = express();
const employees = require('./routes/employees')

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    res.status.send(200, "Bienvenido")
});

app.use('employees', employees);

app.listen(3000, () => {
    console.log("Server is running...")
});