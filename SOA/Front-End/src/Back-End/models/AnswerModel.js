module.exports = (sequelize, Sequelize) => {
    const Answer = sequelize.define("answer", {
      id : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
      email: {
        type: Sequelize.STRING,
      }, 
      title: {
        type: Sequelize.STRING
      },
      content: {
          type: Sequelize.STRING
      }
    });
  
    return Answer;
  };