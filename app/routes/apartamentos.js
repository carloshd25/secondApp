const apartamentoController=require('../controllers/apartamentoController');

module.exports=(router)=>{
 
    router.route('/Apartamento')
    .get(apartamentoController.obtenerApartamento)
    .post(apartamentoController.crearApartamento);  
}

