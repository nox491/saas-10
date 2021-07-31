module.exports = app => {
    const verify = require("../middleware/VerifyToken.js");
    const ans = require("../controllers/AnsQController.js");
    const searchQ = require("../controllers/SearchQController.js");
    const selectQ = require("../controllers/SelectQController.js");

    var router = require("express").Router();
  
    // AnsQRoute
    router.post("/ansq", verify.verifyToken, ans.addAnswer);

    // SearchQRoute
    router.get("/searchQ", searchQ.searchQuestions);

    // SelectQRoute
    router.get("/selectQ", selectQ.sendQData);

    app.use('/', router);
};