const db = require("../models");
const Answers = db.answers;
const sequelize = require("sequelize");
const Op = sequelize.Op;

exports.getMyAnsPerPeriod = (req, res) => {
    const START_DATE = req.query.startDate
    const END_DATE = req.query.endDate;

    Answers.findAll({
        attributes:  [[sequelize.fn('date', sequelize.col("createdAt")), 'createdAt'], "title", "content"],
        where: { createdAt: {
            [Op.gte]: START_DATE,
            [Op.lte]: END_DATE
        },
        email: req.body.email
    },
        order: [[sequelize.fn('date', sequelize.col("createdAt"))]],
        group: [[sequelize.fn('date', sequelize.col("createdAt"))],"title", "content"]
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