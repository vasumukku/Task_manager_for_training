const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // 1. Get header
    const header = req.headers.authorization;

    // 2. Check if token exists
    if (!header) {
      return res.status(401).json({
        message: "No token, access denied"
      });
    }

    // 3. Remove "Bearer "
    const token = header.split(" ")[1];

    // 4. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 5. Store user data
    req.user = decoded;

    // 6. Go to next step
    next();

  } catch (error) {
    res.status(401).json({
      message: "Invalid token"
    });
  }
};

module.exports = authMiddleware;