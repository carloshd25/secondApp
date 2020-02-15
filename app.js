const express = require('express');
const app = express(); //instanciamos servidor
const bodyParser=require('body-parser');
const mongose = require('mongoose');
//const config=require('dotenv');
//config.config();
const config=require('./app/configs/configs');// se importa el config
const router=express.Router();// El rorute es el que le indica a Nod como va a responder a cada peticion
const routes=require('./app/routes/index'); //importamos el archivo index

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());

routes(router);
app.use('/api',router);

mongose.connect(`mongodb://${config.BD_HOST}:${config.BD_PORT}/${config.BD_NAME}`,
                {
                        useNewUrlParser:true, 
                        useUnifiedTopology:true,
                        useFindAndModify:false
                },
                (err)=>{
                        if(err){
                        console.log("Hubo un error");
                        }
                        }
                );


let db =mongose.connection;
db.on('error',console.error.bind(console,'Db connection error:')) ;

if(!db){
    console.log('Error during connection with db');
}else{
    console.log('********** Connect Succesfully **********');
    console.log('*****************************************');
}






app.listen(config.PORT,()=>{
    console.log(`estoy escuchando en el puerto ${config.PORT}`)
});