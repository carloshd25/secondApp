const autentication=require('./autentication');
const apartamento=(require('./apartamentos'));
const unidades=(require('./unidades'));
const propietario=(require('./propietario'));

module.exports=(router)=>{
    /*router.route('/')
        .get((req,res)=>{
            res.send('hola mundo');
        });
        */
       autentication(router);
       apartamento(router);
       unidades(router);
       propietario(router);
}