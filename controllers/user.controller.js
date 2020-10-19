const dbManager = require("../database/db.manager");
/**
 * Create new user
 * @param {*} req
 * @param {*} res
 */
function createUser(req, res) {
  //chekc if the body empty
  if (!req.body) {
    res.status(400).send({
      message: "Request body is empty!!!",
    });
    return;
  }
  //Create new object
  const newUserObj = {
    userName: req.body.userName,
    createdDate: req.body.createdDate,
  };
  //Executing the query of creation - INSERT the previous created object into the database
  dbManager.user
    .create(newUserObj)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        message: "SOME ERROR...",
      });
    });
}

/**
 * Return all users
 * @param {*} req request http
 * @param {*} res request http
 */

async function getAllUsers(req, res) {
  try {
    const users = await dbManager.user.findAll();
    res.json({
      data: users,
    });
  } catch (error) {
    res.status(500).send({
      message: "ERROR IN SERVER, LISTING USERS",
    });
  }
}


/**
 * Return all one user
 * @param {*} req request http
 * @param {*} res request http
 */
async function findOneUserById(req, res) {
  try {
    const { idUser } = req.params;
    const userFound = await dbManager.user.findOne({
      where: {
        idUser: idUser,
      },
    });
    res.json(userFound);
  } catch (error) {
    res.status(500).send({
      message: "ERROR IN SERVER, LISTING USERS",
    });
  }
}

/**
 * Update user
 */
async function updateUser(req, res) {
  try {
    const { idUser } = req.params;
    dbManager.user
      .update(
        {
          userName: req.body.userName,
          createdDate: req.body.createdDate,
        },
        {
          where: { idUser: idUser },
        }
      )
      .then(() => {
        res.send("updated");
      });
  } catch (error) {
    res.status(500).send({
      message: "ERROR IN SERVER, LISTING USERS",
    });
  }
}

/**
 * Delete an existen user by username
 * @param {*} req
 * @param {*} res
 */
function deleteUserByUsername(req, res) {
  try {
    const { userName } = req.params;
    dbManager.user
      .destroy({
        where: { userName: userName },
      })
      .then(() => {
        res.send("removed");
      });
  } catch (error) {
    res.status(500).send({
      message: "ERROR IN SERVER, LISTING USERS",
    });
  }
}

/**
 *
 * @param {*} req
 * @param {*} res
 */
function deleteAllUsers(req, res) {
  try {
    dbManager.user
      .destroy({
        truncate: { cascade: true },
      })
      .then(() => {
        res.send("delete all");
      });
  } catch (error) {
    res.status(500).send({
      message: "ERROR IN SERVER, LISTING USERS",
    });
  }
}

/**
 *
 * @param {*} req
 * @param {*} res
 */
async function findAllUsersByCreatedDate(req, res) {
  try {
    const a = req.params.a;
    const m = req.params.m;
    const d = req.params.d;
    const createdDate = a.toString()+"/"+m.toString()+"/"+d.toString();
    console.log(createdDate);
    const userFound = await dbManager.user.findAll({
        where: {
          createdDate: createdDate,
        },
      });
    res.json(userFound);
  } catch (error) {
    res.status(500).send({
      message: "ERROR IN SERVER, LISTING USERS",
    });
  }
}

exports.createUser = createUser;
exports.getAllUsers = getAllUsers;
exports.findOneUserById = findOneUserById;

exports.updateUser = updateUser;
exports.deleteUserByUsername = deleteUserByUsername;
exports.deleteAllUsers = deleteAllUsers;
exports.findAllUsersByCreatedDate = findAllUsersByCreatedDate;
