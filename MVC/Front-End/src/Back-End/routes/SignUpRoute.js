module.exports = app => {
    const signup = require("../controllers/SignUpController.js");
    
    var router = require("express").Router();
  
    // Sign up
    router.post("/signup", signup.check_signup, signup.create);

    app.use('/', router);
};