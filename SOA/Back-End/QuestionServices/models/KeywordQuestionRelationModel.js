module.exports = (sequelize, Sequelize) => {
const KeywordQuestionRelation = sequelize.define("KeywordQuestionRelation", {
  id : {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});
return KeywordQuestionRelation;
  };