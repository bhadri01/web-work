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
  console.log(request.query)
  response.send("user data")
}

module.exports = {
  Rootmethod,
  Loginfunction,
  UserFunction,
};
