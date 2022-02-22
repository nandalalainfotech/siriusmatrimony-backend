const rolebaseauth = (permission) => {

    return (req, res, next) => {

        const role = req.verifydecode.rolename;

        if (permission.includes(role)) {

            next();

        } else {

            return res.status(401).json("You are not have permission to access..!")

        }
    }
}
export default rolebaseauth;