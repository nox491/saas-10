const db = require("../models");
const Questions = db.questions;
const sequelize = require("sequelize");
const Op = sequelize.Op;

exports.getQPerPeriod = (req, res) => {
    const START_DATE = req.query.startDate
    const END_DATE = req.query.endDate;

    Questions.findAll({
        attributes:  [[sequelize.fn('date', sequelize.col("createdAt")), 'createdAt'], "title"],
        
        where: { createdAt: {
            [Op.gte]: START_DATE,
            [Op.lte]: END_DATE
        }
     },
        order: ["createdAt"]
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