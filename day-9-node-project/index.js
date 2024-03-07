const express = require("express");
const {
  Loginfunction,
  Rootmethod,
  UserFunction,
  signupFunction,
} = require("./lib/routeFunction");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demo",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to the database");
});

const app = express();

app.use(function(request, response, next){
  request.db = db;
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", Rootmethod);
app.post("/login", Loginfunction);
app.post("/signup", signupFunction);
app.get("/user", UserFunction);

const PORT = 8000;

app.listen(PORT, function () {
  console.log(`server is running on ${PORT} port`);
});
