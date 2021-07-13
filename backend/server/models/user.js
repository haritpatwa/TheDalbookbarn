let mongoose = require('mongoose');

const schema  = {
    "userId": String,
    "username": String,
    "password": String,
    "cart": [{
        "bookId": String,
        "quantity": Number
    }],
}

let userModel = mongoose.Schema(schema , { collection: 'Users' });
module.exports = mongoose.model('Users', userModel);