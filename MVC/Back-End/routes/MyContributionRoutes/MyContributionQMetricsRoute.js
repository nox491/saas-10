module.exports = app => {
    const MyQMetricsContribution = require("../../controllers/MyContributionControllers/MyContributionQMetricsController.js");
    const verify = require("../../middleware/VerifyToken.js");
    
    var router = require("express").Router();
  
    // My Question Contribution Metrics Per Period
    router.get("/myqmetricscontribution", verify.verifyToken, MyQMetricsContribution.getMyQMetricsPerPeriod);

    app.use('/', router);
};