const UserModel = require("../models/userdetails")

async function getUser(req, res, next) {
    try {
      const email = req.body.email;
      if (!email) {
        return res.json({login:false})
      }
      const data = await UserModel.findOne({ email });
      if (!data) {
        return res.json({ login: false ,message:"invalid mailid"})
      }
      res.json({userdata :data});
    } catch (error) {
      next(error);
    }
  }
  

module.exports =getUser