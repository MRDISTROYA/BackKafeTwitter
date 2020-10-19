module.exports = (sequelize, Sequelize) => {
  const post = sequelize.define(
    "post", {
      idTweet: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      message: Sequelize.STRING,
      published_date: Sequelize.DATE,
      user: Sequelize.STRING,
      author: Sequelize.STRING,
      device: Sequelize.STRING

    }, {
      tableName: "posts",
      timestamps: false
    }
  );
  return post;
};