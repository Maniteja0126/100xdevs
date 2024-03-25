const { User } = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const username = req.headers.username;
    const password = req.headers.password;
    User.findOne({
        username : username,
        password : password
    })
    .then((admin)=>{
        if(!admin){
            return res.status(401).send("Unauthorized");
        }else{
            // req.admin = admin;
            next();
        }
    }).catch(()=>res.status(500).send("Server Error"))
}

module.exports = userMiddleware;