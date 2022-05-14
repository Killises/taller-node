const morgan = require('morgan');
const express = require('express');
const config = require('./config/config');
const app = express();
// Routes
const employees = require('./routes/employees')
const user = require('./routes/user');
// Middleware
const auth = require('./middleware/auth');
const notFound = require('./middleware/notFound');
const index = require('./middleware/index');
const cors = require('./middleware/cors.js');

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", index);

app.use("/user", user);
app.use(auth);
app.use("/employees", employees);
app.use(notFound);

app.listen(config.PORT, config.HOST, function() {
    console.log('Server is running...');
    console.log(`NODE_ENV=${process.env.NODE_ENV}`);
});