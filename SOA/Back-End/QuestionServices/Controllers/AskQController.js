const db = require("../models");
const Questions = db.questions;
const Keywords = db.keywords;

exports.addQuestion = (req, res, next) => {

    //Create Registry
    const question = {
        email: req.body.email,
        title: req.body.title,
        content: req.body.content
    };

    //Save Question in db
    Questions.create(question)
    .then(data => {
        req.body.question = data
        next();
    })
    .catch(err => {
        res.status(500).send({
            message: "Some error occurred while adding the question"
        });
    });

}


exports.addKeywords = (req, res) => {

    for (let i = 0; i < req.body.keywords.length; i++){

    //Create Registry
    var keyword = {
        word: req.body.keywords[i]
    };

    //Save Keyword in db
     Keywords.upsert(keyword)
    .then(data =>  {
        req.body.question.addKeywords(data); //Create  Registry in Relations Table
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Some error occurred while adding the question"
        })
    })
    }
}