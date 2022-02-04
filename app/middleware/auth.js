
import jwt from "jsonwebtoken";

const config = process.env;

const verifyToken = (req, res, next) => {
    console.log("req---vrify",req);
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
    console.log("token-verify",token);
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
    console.log("decoded",decoded)
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export default verifyToken;