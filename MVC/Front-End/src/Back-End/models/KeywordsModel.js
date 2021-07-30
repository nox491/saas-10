module.exports = (sequelize, Sequelize) => {
    const Keyword = sequelize.define("keyword", {
      word: {
        type: Sequelize.STRING,
        primaryKey: true
      }
    });
  
    return Keyword;
  };