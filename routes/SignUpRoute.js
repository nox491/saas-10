module.exports = app => {
    const users = require("../controllers/SignUpController.js");
    
    var router = require("express").Router();
  
    // Sign up
    router.post("/signup", users.check_signup, users.create);

    app.use('/', router);
};