import { createPost, deletePost, updatePost } from "../services/post.service.js";

export const createPostController = async(req, res) => {
    try{
        const newPost = await createPost(req.body)
        res.status(200).json({
            newPost,
            message: 'Post has been created successfully'
        })
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Post creation failed!',
            err
        })
    }
}

export const updatePostController = async(req, res) => {
    try{
        const updatedPost = await updatePost(req.params, req.body)
        res.status(200).json({
            updatedPost,
            message: 'Post has been updated successfully'
        })
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Post update failed!',
            err
        })
    }
}

export const deletePostController = async(req, res) => {
    try{
        const deletedPost = await deletePost(req.params, req.body)
        res.status(200).json({
            deletedPost,
            message: 'Post has been delete successfully'
        })
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Post deletion failed!',
            err
        })
    }
}