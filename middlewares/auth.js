const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "un-secret-long-c'est-mieux");
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentification échouée" });
  }
};