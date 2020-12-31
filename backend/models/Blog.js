import mongoose from 'mongoose';

const blogSchema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        userName:{
            type: String
        },
        title:{
            type: String,
            maxLength: [150, 'Title must be Under 150 Characters Long.' ],
            minLength: [10, 'Title me be at least 10 Characters Long'],
            required: [true, 'Please Enter a Title' ],
            unique: true
        },
        category:{
            type: String,
            required: true,
            default: 'Web Dev'
        },
        image:{
            type: String,
            default: '/uploads/defaultPost.jpg'
        },
        text:{
            type: String,
            required: [true, 'Please enter a post text']
        },
        published:{
            type: Boolean,
            default: false
        }
    },
    
    {
        timestamps: true
    }
)

const likeSchema = mongoose.Schema(
    {
        likes:{
            type: Number
        },
        usersLike:{
            type: Array,
            default: []
        }
    },
    {
        timestamps: true
    }
)

const Blog = mongoose.model('Blog', blogSchema)
export default Blog