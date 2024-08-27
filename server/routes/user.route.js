import express from 'express'
import { updateUserController } from '../controllers/user.controller.js'

const router = express.Router()

//update user
router.put("/:id", updateUserController)
//delete user

//get user

export default router