const { mongoose } = require('../config/db')
//const class
let userSchema = {   //JS Object
    firstname: String,
    lastname: String,
    email: String,
    username:{
        type: String,
        required:true
    },
    password_hash:String,
    role: String
 };
const User = mongoose.model('User', userSchema);

exports.User=User