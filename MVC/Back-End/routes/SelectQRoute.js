module.exports = app => {
    const selectQ = require("../controllers/FindAQuestionControllers/SelectQController.js");
    
    var router = require("express").Router();
  
    // SelectQRoute
    router.get("/selectQ", selectQ.sendQData);

    app.use('/', router);
};