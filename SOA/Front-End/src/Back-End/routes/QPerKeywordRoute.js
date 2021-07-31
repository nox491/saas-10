module.exports = app => {
    const QperKeyword = require("../controllers/QPerKeywordController.js");
    
    var router = require("express").Router();
  
    // Questions Per Keyword
    router.get("/questionsperkeyword",  QperKeyword.getQPerKeyword);

    app.use('/', router);
};