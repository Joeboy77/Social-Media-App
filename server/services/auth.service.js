import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt';

export const registerUser = async(body) => {
        const hashedPassword = bcrypt.hashSync(body.password, 10)
        const newUser = new userModel({
            username: body.username,
            email: body.email,
            password: hashedPassword
        })
        await newUser.save()
      
   
} 

