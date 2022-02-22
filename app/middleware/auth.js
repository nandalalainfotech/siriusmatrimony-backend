import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
    
    const token = req.params.id || req.body.token || req.query.token || req.headers["x-access-token"] || req.header('authorization');
    
    if (!token) {

        return res.status(403).send("A token is required for authentication");

    } else if (req.headers.authorization) {

        if (req.headers.authorization.split(' ')[0] !== 'Bearer') {

            return res.status(403).send("A token is invalid");

        } else {

            const splittoken = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(splittoken, process.env.TOKEN_KEY);

            req.verifydecode = decoded;

            return next();
        }
    }
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);

        req.verifydecode = decoded;

    } catch (err) {

        return res.status(401).send("Invalid Token");

    }
    return next();
};
export default verifyToken;