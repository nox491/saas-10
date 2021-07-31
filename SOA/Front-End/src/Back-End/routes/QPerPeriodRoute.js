module.exports = app => {
    const QperPeriod = require("../controllers/QPerPeriodController.js");
    
    var router = require("express").Router();
  
    // Questions Per Day
    router.get("/questionsperperiod", QperPeriod.getQPerPeriod);

    app.use('/', router);
};