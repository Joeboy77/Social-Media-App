import mongoose from "mongoose";
import { Schema } from "mongoose";

const userShema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: ture
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture:{
        type: String,
        default: ""
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
})

export default mongoose.model("User", userShema)