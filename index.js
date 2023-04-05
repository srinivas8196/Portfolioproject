const express = require("express")
const mongoose = require("mongoose")
const app = express();
app.use(express.json())


mongoose.connect("mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/Batch7");
console.log("connection sucsesfull");

const SignupRouter = require("./Backend/routes/routes")
app.use("/auth",SignupRouter);



app.listen(3000, () => {
    console.log("Server is running on 3000");
  });
