module.exports = app => {
    const searchQ = require("../controllers/FindAQuestionControllers/SearchQController.js");
    
    var router = require("express").Router();
  
    // SearchQRoute
    router.get("/searchQ", searchQ.searchQuestions);

    app.use('/', router);
};