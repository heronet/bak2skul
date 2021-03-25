const { createUser, getUsers, loginUser } = require("../controllers/usersController");

const router = require("express").Router();

router.route("/signup")
      .post(createUser)
router.route("/login")
      .post(loginUser)
router.route('/')
      .get(getUsers)

module.exports = router;