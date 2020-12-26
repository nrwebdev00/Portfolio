import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/user.js';

//@desc Upload user image
//@route PUT /api/uploads/:id/userimage
//@access PRIVATE
const uploadUserImage = asyncHandler(async (req, res) =>{
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(404)
        throw new Error('user not found')
    }
    await User.findByIdAndUpdate(req.params.id,{ image: req.file.path } )
    res.send(`/${req.file.path}`)
})

export { uploadUserImage }