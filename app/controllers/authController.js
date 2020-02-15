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

exports.autenticar=async(req,res)=>{
  const token=req.body.token;

  try{
    const decodedToken=authService.validarToken(token);
    res.status(200).send(decodedToken);

  }catch (err) {
    res.status(500).send(err);
  }

}