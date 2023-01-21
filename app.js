var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const {authroutes}=require("./routes/users")
const {user,sequelize}=require("./models")
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(authroutes)
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/welcome",(req,res)=>{
    res.render("welcome")
})
app.listen(8000, async () => {
    console.log(`Server started listening on port: ${8000}`);
    
  });