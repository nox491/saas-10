module.exports = app => {
    const QperPeriod = require("../controllers/QPerPeriodController.js");
    
    var router = require("express").Router();
  
    // Questions Per Period
    router.get("/questionsperperiod", QperPeriod.getQPerPeriod);

    app.use('/', router);
};