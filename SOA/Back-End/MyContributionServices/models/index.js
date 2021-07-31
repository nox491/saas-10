const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  dialectOptions: {
    useUTC: false, // for reading from database
  },
  timezone: '+03:00',
  pool: {
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.questions = require("./QuestionModel")(sequelize, Sequelize);

db.answers = require("./AnswerModel")(sequelize, Sequelize);

module.exports = db;