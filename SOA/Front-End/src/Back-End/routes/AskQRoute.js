module.exports = app => {
    const verify = require("../middleware/VerifyToken.js");
    const ask = require("../controllers/AskQController.js");
    const split = require("../helpfulfunctions/KeywordPre.js")
    
    var router = require("express").Router();
  
    // AskQRoute
    router.post("/askq", verify.verifyToken, ask.addQuestion, split.splitKeywords, ask.addKeywords);

    app.use('/', router);
};