// create a reference to the model
let User = require('../models/user');

module.exports.displayUserList = (req, res, next) => {
    User.find((err, userList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.send({"user": userList})      
        }
    });
}

module.exports.addToCart = (req, res, next) => {
    User.updateOne( { _id: req.body._id } , { $set: req.body}, { upsert: true } , (err, User) =>{
        if(err)
            console.log(err);
        else
            res.send({"message": "success"});
    });
}