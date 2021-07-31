module.exports = app => {
    const login = require("../controllers/LoginController.js");
    const signup = require("../controllers/SignUpController.js");

    var router = require("express").Router();
  
    // Login
    router.post("/login", login.check_login, login.verifyUser, login.generateToken);
    // Signup
    router.post("/signup", signup.check_signup, signup.create);

    app.use('/', router);
};