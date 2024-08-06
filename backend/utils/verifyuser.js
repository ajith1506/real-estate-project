var jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    console.log("No auth header provided");
    return res.status(401).json("Access denied. No token provided.");
  }

  const token = authHeader.split(" ")[1];
  console.log("Server Token:", token);
  console.log("JWT Secret:", process.env.JWT_SECRET);

  // Decode the token for debugging
  const decodedToken = jwt.decode(token);
  console.log("Decoded Token:", decodedToken);

  jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err) {
      console.log("Token verification failed:", err.message);
      return res.status(403).json("Invalid token.");
    }
    req.user = user;
    next();
  });
};

const verifyUser = async (req, res, next) => {
  verifyToken(req, res, () => {
    console.log("Verified User ID:", req.user.id);
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Access denied. You are not authorized.");
    }
  });
};

module.exports = { verifyToken, verifyUser };
