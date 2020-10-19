const dbManager = require("../database/db.manager");
/**
 * Create new post
 * @param {*} req
 * @param {*} res
 */
function createPost(req, res) {
  //chekc if the body empty
  if (!req.body) {
    res.status(400).send({
      message: "Request body is empty!!!",
    });
    return;
  }
  //Create new object
  const newPostObj = {
    message: req.body.message,
    published_date: req.body.published_date,
    user: req.body.user,
    author: req.body.author,
    device: req.body.device
    //idUser: req.body.idUser,
  };
  //Executing the query of creation - INSERT the previous created object into the database
  dbManager.post
    .create(newPostObj)
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
 * Return all post user
 * @param {*} req request http
 * @param {*} res request http
 */

async function getAllPosts(req, res) {

  try {
    const posts = await dbManager.post.findAll();
    res.json(
      posts
    );
  } catch (error) {
    res.status(500).send({
      message: "ERROR IN SERVER, LISTING TWEETS",
    });
  }
}

async function findOnePostById(req, res) {
  try {
    const { idTweet } = req.params;
    const postFound = await dbManager.post.findOne({
      where: {
        idTweet: idTweet,
      },
    });
    res.json(postFound);
  } catch (error) {
    res.status(500).send({
      message: "ERROR IN SERVER, LISTING POSTS",
    });
  }
}

/**
 * Update post
 */
async function updatePost(req, res) {
  try {
    const { idTweet } = req.params;
    dbManager.post
      .update(
        {
          message: req.body.message,
        },
        {
          where: { idTweet: idTweet },
        }
      )
      .then(() => {
        res.send("updated");
      });
  } catch (error) {
    res.status(500).send({
      message: "ERROR IN SERVER, LISTING POSTS",
    });
  }
}

/**
 * Delete an existen post by id
 * @param {*} req
 * @param {*} res
 */
function deletePostById(req, res) {
  try {
    const { idTweet } = req.params;
    dbManager.post
      .destroy({
        where: { idTweet: idTweet },
      })
      .then(() => {
        res.send("removed");
      });
  } catch (error) {
    res.status(500).send({
      message: "ERROR IN SERVER, LISTING POSTS",
    });
  }
}

/**
 *
 * @param {*} req
 * @param {*} res
 */
function deleteAllPost(req, res) {
  try {
    dbManager.post
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
function findAllPostByCreatedDate(req, res) {
  /**
   * TASK:
   * IMPLEMENT THE FUNCTION______________________-
   */
}

exports.createPost = createPost;
exports.getAllPosts = getAllPosts;
exports.findOnePostById = findOnePostById;

exports.updatePost = updatePost;
exports.deletePostById = deletePostById;
exports.deleteAllPost = deleteAllPost;
exports.findAllPostByCreatedDate = findAllPostByCreatedDate;
