const db = require("../models");
const Questions = db.questions;
const sequelize = require("sequelize");
const Op = sequelize.Op;

exports.getQPerDay = (req, res) => {
    const TODAY_START = new Date().setHours(0, 0, 0, 0);
    const NOW = new Date();

    Questions.findAll({
        attributes:  ["createdAt", "title"],
        where: { createdAt: {
            [Op.gte]: TODAY_START,
            [Op.lte]: NOW
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