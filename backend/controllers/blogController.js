import asyncHandler from 'express-async-handler';
import Blog from '../models/Blog.js';
import Comments from '../models/Comments.js';

//@desc Create new Blog-Post
//@route POST /api/blog
//@access Private
const createBlogPost = asyncHandler(async( req, res) =>{
    const{ title, category, image, text } = req.body;
    const newPost  = {
        user: req.user._id,
        title,
        category,
        image,
        text 
    }
    const createPost = await Blog.create( newPost );
    res.status(201).json({ createPost });
});

//@desc Get All Blog Post
//@route GET /api/blog
//@access PUBLIC 
const getBlogPost = asyncHandler(async(req, res) =>{
    const PageSize = 10
    const page = Number(req.query.pageNumber) || 1
    const keyword = req.query.keyword 
        ?{
            name:{
                $regex: req.query.keyword,
                $options: 'i'
            },
         } : {}
    const count = await Blog.countDocuments({...keyword})
    const blogs = await Blog.find({...keyword}).limit(PageSize).skip(PageSize * (page - 1))
    res.json({blogs, page, pages: Math.ceil(count/PageSize)}) 
})

//@desc Get Single Blog Post
//@route GET /api/blog/:id
//@access PUBLIC

const getSingleBlog = asyncHandler(async(req, res) =>{
    const blog = await Blog.findById(req.params.id);
    if(blog){
        res.json(blog)
    } else {
        res.status(400)
        throw new Error('Blog not found ')
    }
})


export { createBlogPost, getBlogPost, getSingleBlog }