var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var nodeModulesPath = path.join(__dirname, "..", "node_modules");
app.use("/node_modules", express.static(nodeModulesPath));

var clientPath = path.join(__dirname, "..", "client");
app.use("/client", express.static(clientPath));

app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

var todos = [
    {
        title: "1. Todo",
        content: "Ich bin der Inhalt"
    },
    {
        title: "2. Todo",
        content: "Ich bin der Inhalt"
    }
];

app.get("/api/1.0.0/todos", function(req, res) {
    res.send(todos);
});

app.put("/api/1.0.0/todos/create", function(req, res) {
    console.log(req.body.title, req.body.content);
    todos.push({
        title: req.body['title'],
        content: req.body['content']
    });
    res.send({success: true});
});

app.get("/api/status", function(req, res) {
    res.send(status);
});

var status = {
  "Status":"Ok",
  "Hostname":process.env.HOSTNAME || "empty",
  "Port":process.env.PORT || 3000,
  "Home directory": process.env.HOME,
  "Script:": process.env.npm_package_scripts_run_server,
  "PWD": process.env.PWD,
  "Init CWD":process.env.INIT_CWD,
  "NPM package name":process.env.npm_package_name
};

console.log("Listening on port:", process.env.PORT || 3000);
console.log("Home directory:", process.env.HOME);
console.log("Meteor Port:", process.env.METEOR_PORT);
console.log("Script:",process.env.npm_package_scripts_run_server);
console.log("PWD:",process.env.PWD);
console.log("Init CWD:",process.env.INIT_CWD);
console.log("NPM package name:",process.env.npm_package_name);
console.log("Hostname:",process.env.HOSTNAME);

//console.log("All env variables:", process.env);

app.listen(process.env.PORT || 3000);

console.log("Server started on port:",process.env.PORT || 3000);