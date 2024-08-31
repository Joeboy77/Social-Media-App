import { createPost } from "../services/post.service.js";

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