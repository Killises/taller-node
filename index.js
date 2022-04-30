const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.status.send(200, "Bienvenido")
});

app.listen(3000, () => {
    console.log("Server is running...")
});