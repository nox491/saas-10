module.exports = app => {
    const verify = require("../middleware/VerifyToken.js");
    const ask = require("../controllers/AskQController.js");
    const split = require("../helpfulfunctions/KeywordPre.js");
    const QperPeriod = require("../controllers/QPerPeriodController.js");
    const QperKeyword = require("../controllers/QPerKeywordController.js");
    
    var router = require("express").Router();
  
    // AskQRoute
    router.post("/askq", verify.verifyToken, ask.addQuestion, split.splitKeywords, ask.addKeywords);

    // Questions Per Keyword
    router.get("/questionsperkeyword",  verify.verifyToken, QperKeyword.getQPerKeyword);

    // Questions Per Period
    router.get("/questionsperperiod", verify.verifyToken, QperPeriod.getQPerPeriod);


    app.use('/', router);
};