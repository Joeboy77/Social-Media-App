import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import { dbConnect } from './dbConnect/dbConnect.js '

dotenv.config()

const app = express()

app.listen(5000, () => {
    console.log("Server is listening...");
    dbConnect()
})