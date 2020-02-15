const unidadController = require("../controllers/unidadesController");

module.exports = router => {
  router
    .route("/Unidades")
    .get(unidadController.obtenerUnidad)
    .post(unidadController.crearUnidad);

  router
    .route("/Unidades/:id")
    .delete(unidadController.eliminarUnidad)
    .get(unidadController.findUnidad)
    .put(unidadController.putUnidad);
};
