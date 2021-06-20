const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users.controller");

router.get("/", usersController.getUsersList);

router.get("/:COD", usersController.getUsersById);

router.post("/", usersController.createNewUser);

router.put("/:COD", usersController.updateUser);

module.exports = router;
