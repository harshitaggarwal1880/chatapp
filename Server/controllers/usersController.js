const User = require("../models/userModel");
const brcypt = require("bcrypt")


module.exports.register = async (req,res,next) =>{
    
    try {
        const { username, useremail, userpassword} = req.body;

        const usernameCheck = await User.findOne({username});
        if(usernameCheck){
            return res.json({ status: false , msg: "Username already exists!"})
        }
        
        const emailCheck = await User.findOne({email:useremail})
        if(emailCheck){
            return res.json({ status: false , msg: "Email already exists!"})
        }
    
        const hashedPassword = await brcypt.hash(userpassword, 10);
    
        const user = await User.create({
            username,
            email: useremail,
            password: hashedPassword,
        })
    
        delete user.password;
    
        return res.json({ status: true , user});
    
    } catch (error) {
        next(error);        
   }
}




module.exports.login = async (req,res,next) =>{

    try {
        const { username, userpassword } = req.body;

        const user = await User.findOne({username});
        if(!user){
            return res.json({ status: false , msg: "Invalid Credentials !"})
        }
        
        const isPasswordValid = await brcypt.compare(userpassword, user.password);
            if(!isPasswordValid){
            return res.json({ status: false , msg: "Invalid Credentials !"})
        }

        delete user.password;
    
        return res.json({ status: true , user});
    
    } catch (error) {
        next(error);        
   }
}



module.exports.setavatar = async (req,res,next) =>{
    try {
        const user_id = req.params.id;
        const avatarImage = req.body.image; 
        const userData = await User.findByIdAndUpdate(user_id,{
            isAvatarImageSet: true,
            avatarImage,
        })
        return res.json({isSet: true, image: avatarImage})

    } catch (error) {
        next(error);
    }
}

module.exports.allusers = async (req, res, next) =>{
    try {
        const users = await User.find({ _id: { $ne:req.params.id }, }).select([
            "username",
            "email",
            "avatarImage",
            "_id",
        ]);
        
        return res.json(users)

    } catch (error) {
        next(error)
    }
}