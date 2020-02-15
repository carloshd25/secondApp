const controller=require('../controllers/authController');

module.exports=(router)=>{
    router.route('/login').post(controller.login);
    router.route('/autenticar').post(controller.autenticar);
}