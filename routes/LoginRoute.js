module.exports = app => {
    const users = require("../controllers/LoginController.js");
    
    var router = require("express").Router();
  
    // Login
    router.post("/login", users.check_login, users.verifyUser, users.generateToken);

    app.use('/', router);
};