const http = require("http");
const express = require("express");
const fs = require("fs");
const app = express();

app.listen(3000,(req,res) =>{
    console.log("listenig on port");
})

const file_ = express();

file_.listen(4000,(req,res) =>{
    console.log("file server listening on port 4000...");
})

app.get("/",(req,res)=>{
    res.send("hello");
})

file_.get("/readfile",(req,res)=>{
    fs.readFile("example.txt","utf8",(err,data)=>{
        res.send(data);
    })
})

file_.get("/writefile",(req,res)=>{
    fs.writeFile("example.txt","sss",(err,data)=>{
      res.send("file successfully uodated");
    })
})

const EventEmitter = require("events");
const myemitter = new EventEmitter();
const myModule = require("./myModule");
myemitter.on("events",myModule.eventHandler);
myemitter.emit("events","event happening")

const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"Weather@25"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    });
    connection.connect(function(err) {
        connection.query("select empid from emp", function (err, result, fields) {
        console.log(result);
        console.log("Connected");
        });
        });
    connection.connect(function(err){
        connection.query("INSERT INTO emp() values()", function(err,result,fields){
            console.log(result);
        })
    })
