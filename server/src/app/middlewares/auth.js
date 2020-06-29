const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const authConfig = require("../../config/auth");

module.exports =
  async function(req, res, next) {
    const authHeader = req.headers.authorization;
  
    if (!authHeader)
      return res.status(401).json({ error: "This action requires a token!" });
  
    const [, token] = authHeader.split(" ");
  
    try {
      const decoded = await promisify(jwt.verify)(token, authConfig.secret);
  
      req.userId = decoded.id;
  
      return next();
    } catch (error) {
      return res.status(401).json({ error: "Invalid token!" });
    }
  
};