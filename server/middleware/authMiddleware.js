module.exports = {
    usersOnly: (req, res, next) => {
        const {user} = req.session;
        if(!user) {
            return res.status(401).send("Please log in.")
        }
        next();
    },
    adminOnly: (req, res, next) => {
        const {isAdmin} = req.session.user;
        if(isAdmin === false) {
            return res.status(403).send("You're not the captain! Ski-daddle!")
        }
        next();
    }
}