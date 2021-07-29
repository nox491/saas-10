module.exports = app => {
    const MyAnsMetricsContribution = require("../../controllers/MyContributionControllers/MyContributionAnsMetricsController.js");
    const verify = require("../../middleware/VerifyToken.js");
    
    var router = require("express").Router();
  
    // My Answer Contribution Metrics Per Period
    router.get("/myansmetricscontribution", verify.verifyToken, MyAnsMetricsContribution.getMyAnsMetricsPerPeriod);

    app.use('/', router);
};