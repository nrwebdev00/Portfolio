import asyncHandler from 'express-async-handler';
import User from '../models/user.js';
import Blog from '../models/Blog.js';

//@desc Upload user image
//@route PUT /api/uploads/userimage
//@access PRIVATE
const uploadUserImage = asyncHandler(async (req, res) =>{
    await User.findByIdAndUpdate(req.user.id,{ image: req.file.path } )
    res.send(`/${req.file.path}`)
})

//@desc Upload Blog Image
//@route PUT /api/uploads/blogimage/:id
//access PRIVATE
const uploadBlogImage = asyncHandler(async(req, res) =>{
    await Blog.findByIdAndUpdate(req.params.id, { image: req.file.path })
    res.send(`/${req.file.path}`)
})


export { uploadUserImage, uploadBlogImage }