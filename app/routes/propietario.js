const propietarioControler = require("../controllers/propietariosController");

module.exports = router => {
  router
    .route("/Propietarios")
    .get(propietarioControler.obtenerPropietarios)
    .post(propietarioControler.crearPropietario);

  router
    .route("/Propietarios/:id")
    .delete(propietarioControler.eliminarPropietario)
    .get(propietarioControler.findPropietario)
    .put(propietarioControler.putPropietario);

  router
    .route("/Propietarios/documento/:id")
    .get(propietarioControler.findPropietarioDoc);
};
