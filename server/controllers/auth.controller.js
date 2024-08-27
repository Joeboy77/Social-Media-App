import userModel from "../models/user.model.js";
//Register controller
export const register = async(req, res) => {
    try{
        const newUser = new userModel({
            username: req.boby.username,
            email: req.body.email,
            password: req.body.password
        })
        await newUser.save()
        res.status(200).json({
            newUser,
            message: "User has been created"
        })
    } catch(error) {
        res.status(500).json({
            error: error,
            message: "Error occured registering User"
        })
        console.log(error);
        
    }
} 

