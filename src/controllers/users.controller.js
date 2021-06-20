const UsersModel = require("../models/users.model");

// Get all users list
exports.getUsersList = (req, res) => {
  // console.log("users list");
  UsersModel.getAllUsers((err, users) => {
    console.log("we are in here!");
    if (err) res.send(err);
    console.log("users", users);
    res.send(users);
  });
};

// Get user by ID
exports.getUsersById = (req, res) => {
  console.log("Get user by ID");
  UsersModel.getUserByID(req.params.COD, (err, users) => {
    if (err) res.send(err);
    console.log("Single user data", users);
    res.send(users);
  });
};

//Create new user
exports.createNewUser = (req, res) => {
  const userReqData = req.body;
  console.log("userReqData", userReqData);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).lenght === 0) {
    res
      .send(400)
      .send({ success: false, message: "Please fill all the needed fields" });
  } else {
    console.log("Valid data");
    UsersModel.createUser(userReqData, (err, user) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "User created successfully",
        data: user,
      });
    });
  }
};

// Update user
exports.updateUser = (req, res) => {
  const userReqData = req.body;
  console.log("userReqData update", userReqData);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).lenght === 0) {
    res
      .send(400)
      .send({ success: false, message: "Please fill all the needed fields" });
  } else {
    console.log("Valid data");
    UsersModel.updateUser(req.params.COD, userReqData, (err, user) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "User updated successfully",
        data: user,
      });
    });
  }
};
