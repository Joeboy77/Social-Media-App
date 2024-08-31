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
        const updatePost = await postModel.findByIdAndUpdate(params.id, {
            $set: body,
        }, {
            new: true,
        })
        return updatePost
    } catch(error){
        throw error
    }
}