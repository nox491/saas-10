const db = require("../../models");
const KQRelations = db.KQRelation;

exports.searchQuestions = (req, res) => {

    KQRelations.findAll({
        attributes:  ["questionTitle"],
        where: { 
            keywordWord: req.query.keyword
    },
        order: [["createdAt","DESC"]]
    })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
        message: "Some error occurred while querying"
    })
  })
}