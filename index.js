const morgan = require('morgan');
const express = require('express');
const app = express();
const employees = require('./routes/employees');
const user = require('./routes/user');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res, next) => {
    res.status(200).send("Bienvenido")
});
app.use('/user', user);
app.use('/employees', employees);

app.use((req, res, next) => {
    return res.status(404).json({ code: 404, message: "URL no encontrada" })
});

app.listen(3000, () => {
    console.log("Server is running...")
});