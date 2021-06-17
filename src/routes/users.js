const usersController = require('./../controllers/users');

let routes = (app) => {
    app.get("/",usersController.getUserInfoAll);
    app.get("/insert", usersController.setAddUser);
}
module.exports = routes;