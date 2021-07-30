module.exports = app => {
    const searchQ = require("../controllers/SearchQController.js");
    
    var router = require("express").Router();
  
    // SearchQRoute
    router.get("/searchQ", searchQ.searchQuestions);

    app.use('/', router);
};