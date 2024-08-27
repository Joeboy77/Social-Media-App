import { loginUser, registerUser } from "../services/auth.service.js";

export const register = async(req, res) => {
    try{
        const newUser = await registerUser(req.body)

        const {password, ...data} = newUser._doc
        res.status(200).json({
            data,
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

export const login = async(req, res) => {
    try{
       const loggedInUser = await loginUser(req.body)
       const { password, ...data} = loggedInUser._doc
       res.status(200).json({
        message: "user logged in successfully",
        data
       })
    } catch(error) {
       if(error.message === "User does not exist" || error.message === "Wrong password"){
        res.status(401).json({
            error: error.message,
            message: "Authentication failed"
        })
       } else {
        res.status(500).json({
            error: error.message,
            message: "Error occured logging User in"
        })
       }
       console.log(error);
       
        
    }
}

