const express = require('express');
const employees = express.Router();

employees.post('/', (req, res, next) => {
    return res.status(200).send(req.body);
});

employees.get('/', (req, res, next) => {
    return res.status(200).send(employees);
});

employees.get('/:id([0-9]{1,3})', (req, res, next) => {
    const id = req.params.id - 1;
    if (id >= 0 && id <= 150) {
        return res.status(200).send(employees[req.params.id - 1]);
    }
    return res.status(404).send("Empleado no encontrado");
});

employees.get('/:name([A-Za-z]+)', (req, res, next) => {
    const name = req.params.name;
    const emp = employees.filter((p) => {
        return (p.name.toUpperCase() == name.toUpperCase()) && p;
    });
    if (emp.length > 0) {
        return res.status(200).send(emp);
    }
    return res.status(404).send("Empleado no encontrado")
});

module.exports = employees