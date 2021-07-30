const db = require("../models");
const Answers = db.answers;

exports.addAnswer = (req, res) => {

    //Create Registry
    const answer = {
        email: req.body.email,
        title: req.body.title,
        content: req.body.content
    };
    //Save Answer in db
    Answers.create(answer)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: "Some error occurred while adding the answer"
        });
    });

}