import { trusted } from 'mongoose'
import postModel from './../models/post.model.js'


export const createPost = async(body) => {
    try{
        const newPost = new PostModel(body)

        await newPost.save()
        return newPost
    } catch(error){
        throw error
    }
}

export const updatePost = async(params, body) => {
    try{
        const updatedPost = postModel.findById(params.id)
        if(post.userId === body.userId){
            await postModel.updateOne({
                $set: body,
            }, {
                new: true
            })
            return updatedPost
        } else{
            throw new Error("You can update only your post")
        }
    } catch(error){
        throw error
    }
}