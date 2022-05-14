const jwt = require('jsonwebtoken');
const key = require('../config/jwt')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.ENV_TOKEN);
        req.user = decoded;
        next();

    } catch (error) {
        return res.status(200).json({ code: 401, message: "No tienes permiso :(" })

    }
};