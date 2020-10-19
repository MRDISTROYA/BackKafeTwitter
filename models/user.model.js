module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define(
    "user",
    {
      idUser: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userName: {
        type: Sequelize.STRING,
        unique: true,
      },
      createdDate: Sequelize.DATE,
    },
    {
      tableName: "users",
    }
  );
  return user;
};
