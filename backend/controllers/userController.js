import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/user.js';

//@desc Register User 
//@route POST /api/users/register
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

//@desc Login User
//@route POST /api/users/login
//@access PUBLIC
const loginUser = asyncHandler(async (req, res) =>{
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            role: user.role,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid Email or Password');
    }
});

//@desc View User
//@ GET /api/users/profile
//@access PRIVATE
const getUser = asyncHandler(async (req, res) =>{
    const user = await User.findById(req.user._id);
    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            image: user.image,
            role: user.role
        })
    } else {
        res.status(404)
        throw new Error('User not Found')
    }
});

//@desc Update User Profile
//@route PUT /api/users/profile/
//@access PRIVATE
const updateUserProfile = asyncHandler(async(req, res) =>{
    const user = await User.findById(req.user._id)
    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password){
            user.password = req.body.password
        }

        const updateUser = await user.save();

        res.json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            role: updateUser.role,
            token: generateToken(updateUser._id)
        })
    } else {
        res.status(404)
        throw new Error('User Not found')
    }
})


export { registerUser, loginUser, getUser, updateUserProfile }