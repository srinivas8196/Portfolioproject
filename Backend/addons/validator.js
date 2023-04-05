const jwt = require('jsonwebtoken');
async function validator(req, res, next) {
    try {
      const { authorization } = req.headers;
      console.log(authorization, "from headerssss");
      const authToken = authorization.split(" ")[1];
      const decoded = await jwt.verify(authToken, process.env.JWT_ACCESS_TOKEN);
      console.log(decoded, "-----------------------------------from decoded auth");
      if (decoded) {
        return next();
      }
      return res.status(403).json({ message: "Forbidden" });
    } catch (error) {
      next(error);
    }
  }
  

module.exports = validator;
