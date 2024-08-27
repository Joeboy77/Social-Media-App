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
        
        return newUser
} 

export const loginUser = async(body) => {
    const user = await userModel.findOne({email: body.email})
    if(!user) {
        throw new Error("User does not exist")
    }

    const validatePassword = await bcrypt.compare(body.password, user.password)

    if(!validatePassword) {
        throw new Error("Wrong password")
    }

    return user
}

