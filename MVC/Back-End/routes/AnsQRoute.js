module.exports = app => {
    const verify = require("../middleware/VerifyToken.js");
    const ans = require("../controllers/FindAQuestionControllers/AnsQController.js");
    
    var router = require("express").Router();
  
    // AnsQRoute
    router.post("/ansq", verify.verifyToken, ans.addAnswer);

    app.use('/', router);
};