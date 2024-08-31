import express from 'express'
import { createPostController, updatePostController } from '../controllers/post.controller.js'
const router = express.Router()

//create post
router.post('/create-post', createPostController)

//update post
router.put('/update-post/:id', updatePostController)

export default router

