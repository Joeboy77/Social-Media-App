import express from 'express'
import { deleteUserController, getUserController, updateUserController } from '../controllers/user.controller.js'

const router = express.Router()

//update user
router.put("/:id", updateUserController)

//delete user
router.delete("/:id", deleteUserController)

//get user
router.get("/:id", getUserController)

export default router