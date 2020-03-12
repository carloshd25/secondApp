const jwt =require('jsonwebtoken');
const config =require('../configs/configs');
const userService=require('./userService');

exports.autenticar=(user,pass)=>{
    if(user==pass){
        
        const token=jwt.sign({id: user},config.SECRET,{
            expiresIn:10000
        })
        return token;
    }
    else{
        return "no se pudo autenticar";
    }
}

exports.SignUp= async(user)=>{
    const userName=user.userName;
    const userExit =await userService.getUserByUsername(userName);
    if(userExit){
        throw new Error('El usuario ya existe');
    }

    return await userService.createUser(user);
}

exports.validarToken=(token)=>{
    
    const decodedToken=jwt.verify(token,config.SECRET);
    return decodedToken;

}