const User =require('../models/user');

exports.getUserByUsername=async(userName)=>{
    return await User.findOne({userName:userName});
}

exports.createUser=async (user)=>{
    return await User.create(user);
}