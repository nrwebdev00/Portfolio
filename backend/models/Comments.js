import mongoose from 'mongoose';


const commentSchema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        blog:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Blog'
        },
        comment:{
            type: String,
            required: true,
            maxLength: [1000, 'Comments are limited 1000 characters']
        }
    },
    {
        timestamps: true
    }
)

const Comment = mongoose.model('Comment', commentSchema)

export default Comment;