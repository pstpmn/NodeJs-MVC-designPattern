const config = require('./config/env');
const bodyParser = require('body-parser');
const cors = require('cors');
const initRoutes = require('./routes/index');


const buildApp = () =>{
    const app = require('express')();
    initRoutes(app);
    return app;
}




module.exports = buildApp;