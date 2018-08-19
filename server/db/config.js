const Sequelize = require("sequelize");

const rbppdb = new Sequelize(
  "postgres://griff:temecula1@bbscoutdb.cpbianqr35ok.us-west-1.rds.amazonaws.com:5432/bbscoutdb",
  {
    dialect: "postgres",
    pool: {
      min: 0,
      idle: 1000
    },
    logging: false
  }
);

rbppdb
  .authenticate()
  .then(() => console.log("connected to db"))
  .catch(err => console.log("FAILED TO CONNECT TO DB", err));

module.exports = {
  rbppdb
};
