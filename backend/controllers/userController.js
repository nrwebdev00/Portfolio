import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/user.js';

//@desc Register User 
//@route POST /api/users/login
//@access PUBLIC
const registerUser = asyncHandler(async (req, res) =>{
    const {  email, name, password } = req.body;
    const userExists = await User.findOne({ email })
    if(userExists){
        res.status(400)
        throw new Error('User Already Exist');
    }
    const user = await User.create({ name, email, password })
    if(user){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        })
    } else { 
        res.status(400)
        throw new Error('Invalid User Data')
    }
})


export { registerUser }