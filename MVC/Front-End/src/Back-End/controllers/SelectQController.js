const db = require("../models");
const Questions = db.questions;
const Answers = db.answers;

exports.sendQData = (req, res) => {

    Promise.all([
        Questions.findAll({attributes:  ["title","content"],
        where: { 
            title: req.query.questionTitle
        }
        }),
        Answers.findAll({attributes:  ["content"],
        where: { 
            title: req.query.questionTitle
        }})
    ])
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
        message: "Some error occurred while querying"
    })
  })
}