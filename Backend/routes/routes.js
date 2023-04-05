const express = require("express");
const AuthRouter = express.Router();

const RegisterUser = require("../controller/RegisterUser")
const LoginUser = require("../controller/LoginUser");
const GetUser  = require("../controller/GetUser");
const validator = require("../addons/validator")
AuthRouter.post("/register", RegisterUser)
AuthRouter.post("/login",LoginUser)
AuthRouter.get("/user", GetUser)
AuthRouter.get("/login",(req,res)=>
{
    res.send("Login Sucsess")
})

module.exports = AuthRouter;

// app.post("/showauthor", function (req,res)
// {
//    showauthors()
// })

// app.put("/author:name", function (req,res)
// {
//     updateauthor()
// })