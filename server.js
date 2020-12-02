const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('error-handler');
const apiRouter = require('./api/api');

const PORT = process.env.PORT || 8081 || 4000;
const optionalDatabase = process.env.TEST_DATABASE;

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(optionalDatabase || './database.sqlite');

app.use(bodyParser.json());
app.use(cors);
app.use(errorHandler);
app.use(morgan('dev'));
app.use('./api', apiRouter);



















app.listen(PORT, () => {
    console.log(`Server listens on port ${PORT}`);
});

module.exports = app;
