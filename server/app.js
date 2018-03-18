var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var nodeModulesPath = path.join(__dirname, "..", "node_modules");
app.use("/node_modules", express.static(nodeModulesPath));

var clientPath = path.join(__dirname, "..", "client");
app.use("/client", express.static(clientPath));

app.use(bodyParser.json());

const MONGO_DB_URI = "mongodb://ahock:taurus1ted@ds135069.mlab.com:35069/aimy";
mongoose.connect(MONGO_DB_URI,{});
mongoose.connection.on('connected', () => {
    console.log("Connected to MongoDB");
    // Load initial data

});
mongoose.connection.on('error', (err) => {
    console.log("Error:", err, MONGO_DB_URI);    
});
var Schema = mongoose.Schema;

var userTestData = new Schema({
    text: String,
    lang: String
},{collection: 'test'});

const TestData = mongoose.model('testData', userTestData);

app.get("/", function(req, res) {
    console.log("index.html aufgerufen:", req.query);
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/favicon.ico", function(req, res) {
    res.sendFile(path.join(__dirname, ".", "favicon.ico"));
});

app.get("/api/0.1.0/todos", function(req, res) {
    TestData.find()
        .then(function(doc){
            console.log("ID:", doc[0]);
            res.send(doc);
    });
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
app.get("/api/1.0.1/todos", function(req, res) {
    
    TestData.find()
        .then(function(doc){
            var todos = [];
            for(var i=0; i<doc.length; i++){
                console.log("ID:", doc[i]);
                todos.push({
                    title: doc[i].lang,
                    content: doc[i]['text']
                });            
            }
            res.send(todos);
    });
//    res.send(todos);
});

app.put("/api/1.0.0/todos/create", function(req, res) {
    console.log(req.body.title, req.body.content);
    todos.push({
        title: req.body['title'],
        content: req.body['content']
    });
    res.send({success: true});
});


///////////////////////////////////////////////////////////////
//
// User
//
///////////////////////////////////////////////////////////////

var userList = [
    {
        token: "auth0|5982bfc096b8174f9f2d5ce0",
        email: "andreashock@bluewin.ch",
        firstname: "Andreas",
        lastname: "Hock"
    },
    {
        token: "",
        email: "aho@gmx.de",
        firstname: "Ted",
        lastname: "Hock"
    }
];

app.get("/api/0.0.1/user/get", function(req, res) {
    console.log("/api/0.0.1/user/get");
    res.send(userList);
});


// User ////////////////////////////////////////////////////////




app.get("/callback", function(req, res) {
    res.status(200).redirect("/");
//    res.status(200).redirect("/user");
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