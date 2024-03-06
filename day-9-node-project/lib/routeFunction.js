function Rootmethod(request, response) {
  response.send("hacked sdfsdfsdfsdfsdfsdffsdfriwejlvn sdfnsdf");
}

function Loginfunction(request, response) {
  const { uname, pass } = request.body;
  if (uname == "admin" && pass == "admin") {
    response.send("login success");
  } else {
    response.send("login failure");
  }
}

module.exports = {
  Rootmethod,
  Loginfunction,
};
