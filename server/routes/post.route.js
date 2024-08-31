import express from 'express'
import { createPostController, deletePostController, updatePostController } from '../controllers/post.controller.js'
const router = express.Router()

//create post
router.post('/create-post', createPostController)

//update post
router.put('/update-post/:id', updatePostController)

//delete post
router.delete('/delete-post/:id', deletePostController)

//like and dislike

export default router

