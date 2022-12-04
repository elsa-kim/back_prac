const express = require("express");

const userDb = require("../controllers/users");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const users = await userDb.getUsers();

  res.render("users", { users: users });
});

module.exports = router;
