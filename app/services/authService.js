const jwt =require('jsonwebtoken');
const config =require('../configs/configs')

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

exports.validarToken=(token)=>{
    
    const decodedToken=jwt.verify(token,config.SECRET);
    return decodedToken;

}