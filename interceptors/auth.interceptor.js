const { base64Decode } = require("../utils");
exports.authInterceptor = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    const token = authorization.split(" ")[1];
    if (token) {
      const decoded = base64Decode(token);
      if (decoded) {
        req.user = { id: decoded.split("_")[0], email: decoded.split("_")[1] };

        return next();
      }
    }
  }
  return res.status(401).json({ message: "Unauthorized" });
};
