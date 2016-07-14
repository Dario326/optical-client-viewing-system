const developersRoutes = require("./developer/developersRoutes");
const usersRoutes = require("./users/usersRoutes");
//
//
module.exports = app => {
    developersRoutes(app);
    usersRoutes(app);
};