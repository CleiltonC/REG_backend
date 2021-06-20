const db = require("../../config/db.config");

const Users = (user) => {
  this.cod = user.cod;
  this.cpf = user.cpf;
  this.nm = user.nm;
  this.tel = user.tel;
  this.end = user.end;
  this.email = user.email;
  this.nivel = user.nivel;
  this.senha = user.senha;
  this.data_ent = user.data_ent;
  this.data_saida = user.data_saida;
};

Users.getAllUsers = (result) => {
  db.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("Error fectching users", err);
      result(null, err);
    } else {
      console.log("users fetcheted");
      result(null, res);
    }
  });
};

// Get user by ID from DB
Users.getUserByID = (id, result) => {
  db.query("SELECT * FROM users WHERE COD=?", id, (err, res) => {
    if (err) {
      console.log("Error while fetching user by ID", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Users.createUser = (userReqData, result) => {
  db.query("INSERT INTO users SET ? ", userReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      result(null, err);
    } else {
      console.log("User created successfully");
      result(null, res);
    }
  });
};

Users.updateUser = (COD, userReqData, result) => {
  db.query(
    "UPDATE users SET  CPF=?,  NM=?,  TEL=?,  END=?,  EMAIL=?,  NIVEL=?,  SENHA=?,  DATA_ENT=?,  DATA_SAIDA=? WHERE COD=?",
    [
      userReqData.cpf,
      userReqData.nm,
      userReqData.tel,
      userReqData.end,
      userReqData.email,
      userReqData.nivel,
      userReqData.senha,
      userReqData.data_ent,
      userReqData.data_saida,
      COD,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while updating");
        result(null, err);
      } else {
        console.log("User updated successfully", userReqData.cpf);
        result(null, res);
      }
    }
  );
};

module.exports = Users;
