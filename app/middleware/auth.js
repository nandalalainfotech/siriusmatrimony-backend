import jwt from "jsonwebtoken";

const verifyToken = async(req, res, next) => {
    console.log(req)
     const token =
     req.params.id ||req.body.token || req.query.token || req.headers["x-access-token"] || req.header('authorization');
        console.log(token);
   
        if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    if (req.headers.authorization){
    if (req.headers.authorization.split(' ')[0] !== 'Bearer') {
        return res.status(403).send("A token is invalid");
    }else{
    const splittoken = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(splittoken, process.env.TOKEN_KEY);
        req.verifydecode = decoded;
}
    }
    
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.verifydecode = decoded;
        console.log("token",decoded)

    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};

export default verifyToken;