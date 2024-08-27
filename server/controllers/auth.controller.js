import { registerUser } from "../services/auth.service.js";

export const register = async(req, res) => {
    try{
        const newUser = await registerUser(req.body)

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

