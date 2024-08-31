import express from 'express'
import { createPostController, deletePostController, getPostCOntroller, getTimelinePostController, likeAndDislikeController, updatePostController } from '../controllers/post.controller.js'
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

//get timeline post
router.get('/get-timeline-post/:id', getTimelinePostController)




export default router

