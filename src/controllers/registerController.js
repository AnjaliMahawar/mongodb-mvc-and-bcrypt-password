
//const { User } = require("../models/user");

const { User } = require("../models/user");
const bcrypt = require('bcrypt');

let registerController=(req,res)=>{
    //db insert code 
    //chk user already exist or not 
    //Adventure.findOne({ country: 'Croatia' }, function (err, adventure) {});
    User.findOne({email:req.body.email},function(err,user){
        //chk the value of user 
        if(user===null){
            const saltRounds=10
            let encryptPass=bcrypt.hashSync(req.body.password_hash, saltRounds);
            req.body.password_hash=encryptPass;
            console.log(req.body.password_hash)
            //we can reg. to user
            const user = new User(req.body);
            user.save().then((d)=>{
        
                res.json({
                    msg:"user registered successfully"
                })
        
            }).catch((e)=>{
                res.status(400).json({
                    msg:"not oky"
                })
            });
        }
        else{
            //user is already exist
            res.status(400).json({
                msg:"user is already exist"
            })
        }
    })
 
 
}
exports.registerController=registerController