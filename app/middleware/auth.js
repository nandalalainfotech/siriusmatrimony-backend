import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"] || req.header('authorization');
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    if (req.headers.authorization.split(' ')[0] !== 'Bearer') {
        return res.status(403).send("A token is invalid");
    }
    const splittoken = req.headers.authorization.split(' ')[1]
    try {
        const decoded = jwt.verify(splittoken, process.env.TOKEN_KEY, );
        req.verifydecode = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};

export default verifyToken;