//IMPORT SEQUELIZE
const sequelize = require('sequelize');
const sequelizeConnection = require ('./db.connection');

//IMPORT MODELS
const userModel = require('../models/user.model');
const postModel = require('../models/post.model');

//INITIALIZE MODELS
const user = userModel(sequelizeConnection, sequelize);
const post = postModel(sequelizeConnection, sequelize);

//CREATE RELATIONS AMONG MODELS
//user.hasMany(post, {foreignKey: 'idPost', sourceKey: 'idUser'});
//post.belongsTo(user, {foreignKey: 'idUser', sourceKey: 'idPost'});

const db = {
    user,
    post,
    sequelizeConnection
}

module.exports = db;