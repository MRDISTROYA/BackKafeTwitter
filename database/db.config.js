const dbconfig = {
  HOST: "localhost",
  USER: "admindb",
  PASSWORD: "Admin999*",
  DB: "dbfaketwitter",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = dbconfig;
