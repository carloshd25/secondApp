const authService = require("../services/authService");

exports.login = async (req, res) => {
  const user = req.body.user;
  const pass = req.body.pass;

  const tokenRes = authService.autenticar(user, pass);
  const response={
    token: tokenRes
  }
  res.send(response);
};

exports.singUp=async(req,res)=>{
  try{
    const user=await authService.SignUp(req.body);
    if(!user){
      return res.status(500).send({error:'El usuario no ha podido ser creado'});
    }
    return res.status(201).send(user);

  }
  catch(err){
    console.log(  err  );
    return res.status(500).send(err);
    
  }
}

exports.autenticar=async(req,res)=>{
  const token=req.body.token;

  try{
    const decodedToken=authService.validarToken(token);
    res.status(200).send(decodedToken);

  }catch (err) {
    res.status(500).send(err);
  }

}