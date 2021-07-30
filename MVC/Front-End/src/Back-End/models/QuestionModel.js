module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("question", {
      email: {
        type: Sequelize.STRING,
      }, 
      title: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      content: {
          type: Sequelize.STRING
      }
    });
  
    return Question;
  };