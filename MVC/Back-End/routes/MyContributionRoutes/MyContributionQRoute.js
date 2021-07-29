module.exports = app => {
    const MyQContribution = require("../../controllers/MyContributionControllers/MyContributionQController.js");
    const verify = require("../../middleware/VerifyToken.js");
    
    var router = require("express").Router();
  
    // My Question Contribution Per Period
    router.get("/myqcontribution", verify.verifyToken, MyQContribution.getMyQPerPeriod);

    app.use('/', router);
};