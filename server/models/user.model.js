import mongoose from "mongoose";
import { Schema } from "mongoose";

const userShema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
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
    },
    desc:{
        type: String,
    },
    from: {
        type: String,
    },
    relationship: {
        type: Number,
        enum: [1, 2, 3]
    },
    folloers: {
        type: Array,
        default: [],
    },
    followings: {
        type: Array,
        default: [],
    }
})

export default mongoose.model("User", userShema)