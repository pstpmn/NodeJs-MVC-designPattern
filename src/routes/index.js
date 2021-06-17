require('express-group-routes');


let routes = (app) => {
    app.get("/", () => { console.log('index'); }); // /api/v1/login 

    app.group("/users", (app) => {
        require('./users')(app)
    });
    
  

    // return app
}
module.exports = routes;