const express = require("express");
const { Loginfunction, Rootmethod } = require("./lib/routeFunction");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", Rootmethod);
app.post("/login", Loginfunction);

const PORT = 8000;

app.listen(PORT, function () {
  console.log(`server is running on ${PORT} port`);
});
