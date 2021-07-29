module.exports = app => {
    const MyAnsContribution = require("../../controllers/MyContributionControllers/MyContributionAnsController.js");
    const verify = require("../../middleware/VerifyToken.js");
    
    var router = require("express").Router();
  
    // My Answer Contribution Per Period
    router.get("/myanscontribution", verify.verifyToken, MyAnsContribution.getMyAnsPerPeriod);

    app.use('/', router);
};