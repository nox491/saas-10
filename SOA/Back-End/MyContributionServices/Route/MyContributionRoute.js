module.exports = app => {
    const MyAnsMetricsContribution = require("../Controllers/MyContributionAnsMetricsController.js");
    const verify = require("../middleware/VerifyToken.js");
    const MyAnsContribution = require("../Controllers/MyContributionAnsController.js");
    const MyQMetricsContribution = require("../Controllers/MyContributionQMetricsController.js");
    const MyQContribution = require("../Controllers/MyContributionQController.js");

    var router = require("express").Router();
  
    // My Answer Contribution Metrics Per Period
    router.get("/myansmetricscontribution", verify.verifyToken, MyAnsMetricsContribution.getMyAnsMetricsPerPeriod);

    // My Answer Contribution Per Period
    router.get("/myanscontribution", verify.verifyToken, MyAnsContribution.getMyAnsPerPeriod);

    // My Question Contribution Metrics Per Period
    router.get("/myqmetricscontribution", verify.verifyToken, MyQMetricsContribution.getMyQMetricsPerPeriod);

    // My Question Contribution Per Period
    router.get("/myqcontribution", verify.verifyToken, MyQContribution.getMyQPerPeriod);


    app.use('/', router);
};