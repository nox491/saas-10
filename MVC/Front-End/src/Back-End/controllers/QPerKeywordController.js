const db = require("../models");
const KQRelation = db.KQRelation;
const sequelize = require("sequelize");
const Op = sequelize.Op;

exports.getQPerKeyword = (req, res) => {

    KQRelation.findAll(
        {
            attributes: ['keywordWord',[sequelize.fn('count', sequelize.col('questionTitle')),'count']],
            where: {
                keywordWord: {[Op.not]: null}
             },
            group: ['keywordWord'],
        })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
        message: "Some error occurred while querying"
    })
  })
};