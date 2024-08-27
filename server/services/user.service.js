import bcrypt from 'bcrypt'
import userModel from '../models/user.model.js'

export const updateUser = async(userId, updateData) =>{
    if(updateData.password){
        try{
            updateData.password = await bcrypt.hashSync(updateData.password, 10)
        } catch(err){
            throw err
        }
    }
    try{
        const user = await userModel.findByIdAndUpdate(userId, {
            $set:updateData
        }, {
            new: true,
        })
        return user
    } catch(err){
        throw err
    }
}