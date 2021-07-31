module.exports = app => {
    const esb = require("../Controllers/ESBController.js");

    var router = require("express").Router();
  
    router.get("/esb", esb.get_axios_reroute);

    router.post("/esb", esb.post_axios_reroute);


    app.use('/', router);
};