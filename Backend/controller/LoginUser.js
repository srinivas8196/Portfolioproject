const UserModel = require("../models/userdetails")
const jwt = require('jsonwebtoken');


async function LoginUser(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        return res.json({login:false})
      }
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.json({ login: false ,message:"invalid mailid"})
      }
      if (password !== user.password) {
        return res.json({ login: false ,message:"invalid password"})
      }
      const accessToken = jwt.sign({ email }, process.env.JWT_ACCESS_TOKEN, { expiresIn: '20m' });
      res.json({token:accessToken,login :true});
    } catch (error) {
      next(error);
    }
  }
  
module.exports = LoginUser;