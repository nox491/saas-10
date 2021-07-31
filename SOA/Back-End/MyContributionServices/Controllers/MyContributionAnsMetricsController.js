const db = require("../models");
const Answers = db.answers;
const sequelize = require("sequelize");
const Op = sequelize.Op;

exports.getMyAnsMetricsPerPeriod = (req, res) => {
    const START_DATE = req.query.startDate
    const END_DATE = req.query.endDate;

    Answers.findAll({
        attributes:  [[sequelize.fn('date', sequelize.col("createdAt")), 'createdAt'], [sequelize.fn('count', sequelize.col('title')),'titlesperday']],
        
        where: { createdAt: {
            [Op.gte]: START_DATE,
            [Op.lte]: END_DATE
        },
        email: req.body.email
     },
        group: [[sequelize.fn('date', sequelize.col("createdAt")), 'createdAt']]
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