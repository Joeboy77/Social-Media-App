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

export const deleteUser = async(userId) =>{
    try{
       await userModel.findByIdAndDelete(userId)
        return user
    } catch(err){
        throw err
    }
}

export const getUser = async(userId) =>{
   
    try{
        const user = await userModel.findById(userId)
        return user
    } catch(err){
        throw err
    }
}

export const followUser = async(userdata, updateData) => {
    if(userdata.userId === updateData.id){
        throw new Error("You cannot folllow yourself!")
    } else {
        try{
            const user = await userModel.findById(userdata.userId)
            const currentUser = await userModel.findById(updateData.id)
            if(!user.followers.includes(userdata.userId)){
                await currentUser.updateOne({$push: {followers: updateData.userId}})
                await user.updateOne({$push: {followongs:  updateData.id}})
                return {user, currentUser}
            } else {
                throw new Error ("You have already followed the user")
            }
        } catch(err) {
            throw err
        }
        
    }   
}

export const unfollowUser = async(userdata, updateData) => {
    if(userdata.userId === updateData.id){
        throw new Error("You cannot unfolllow yourself!")
    } else {
        try{
            const user = await userModel.findById(userdata.userId)
            const currentUser = await userModel.findById(updateData.id)
            if(!user.followers.includes(userdata.userId)){
                await currentUser.updateOne({$pull: {followers:  userdata.id}}, {new: true})
                await user.updateOne({$pull: {followongs: updateData.id}}, {new: true})
                return {user, currentUser}
            } else {
                throw new Error ("You don't follow this user")
            }
        } catch(error) {
            throw error
            
        }
    }   
}
