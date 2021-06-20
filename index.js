const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
// parse request data content type application/JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//import users routes
const usersRoutes = require("./src/routes/users.route");

// create users routes
app.use("/users", usersRoutes);

app.listen(3006, () => {
  console.log("running on port 3006");
});
