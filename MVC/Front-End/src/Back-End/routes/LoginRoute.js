module.exports = app => {
    const login = require("../controllers/LoginController.js");
    
    var router = require("express").Router();
  
    // Login
    router.post("/login", login.check_login, login.verifyUser, login.generateToken);

    app.use('/', router);
};