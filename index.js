const application = require('./src/app');
const config = require('./src/config/env');
const db = require('./src/config/connect');
const redis = require('redis')


const run = () => {
    const app = application();

    app.listen(config.port, config.hostName, () => {
        console.log('application running on port : ' + config.port);
    })
}

//setting global function 
global.db = db;
global.redisClient = redis.createClient() // default port 6379

//running Application
run();