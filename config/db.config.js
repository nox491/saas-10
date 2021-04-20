module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "saas-10",
    DB: "users",
    dialect: "postgres",
    pool: {
      acquire: 30000,
      idle: 10000
    }
  };