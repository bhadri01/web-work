function Rootmethod(request, response) {
  response.send("hacked sdfsdfsdfsdfsdfsdffsdfriwejlvn sdfnsdf");
}

function Loginfunction(request, response) {
  const { uname, pass } = request.body;
  console.log(request.body);
  if (uname == "admin" && pass == "admin") {
    response.send("login success");
  } else {
    response.send("login failure");
  }
}

function UserFunction(request, response) {
  console.log(request.query);
  response.send("user data");
}

function signupFunction(request, response) {
  const { username, email, password, confirmPassword } = request.body;
  let noUsers = 0;
  // check for required fields
  let sql = `SELECT * FROM users WHERE username='${username}' and email='${email}'`;
  request.db.query(sql, function (err, result) {
    if (result.length > 0) {
      noUsers = 1;
    }
    if (noUsers == 0) {
      // insert part
      if (password == confirmPassword) {
        const sql = `INSERT INTO users (username, password, email) VALUES ('${username}','${password}','${email}')`;
        request.db.query(sql, function (err, result) {
          if (err) {
            response.send(err);
          } else {
            response.send("signup success");
          }
        });
      } else {
        response.send("signup failure incorrect password and confirm password");
      }
    } else {
      response.send("username or email already exist");
    }
  });
}

module.exports = {
  Rootmethod,
  Loginfunction,
  UserFunction,
  signupFunction,
};
