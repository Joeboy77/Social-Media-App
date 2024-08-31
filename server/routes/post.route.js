import express from 'express'
import { createPostController, deletePostController, getPostCOntroller, likeAndDislikeController, updatePostController } from '../controllers/post.controller.js'
const router = express.Router()

//create post
router.post('/create-post', createPostController)

//update post
router.put('/update-post/:id', updatePostController)

//delete post
router.delete('/delete-post/:id', deletePostController)

//like and dislike
router.put('/like-post/:id', likeAndDislikeController)

//get post
router.get('/get-post/:id', getPostCOntroller)



export default router

