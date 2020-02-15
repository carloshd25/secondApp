const UnidadService = require("../services/unidadesService");

exports.obtenerUnidad = async (req, res) => {
  try {
    let Unidades = await UnidadService.obtenerUnidad();

    res.status(200).send(Unidades);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.crearUnidad = async (req, res) => {
  try {
    let unidad = req.body;
    let addResult = await UnidadService.crearUnidad(unidad);
    res.status(200).send(addResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.eliminarUnidad = async (req, res) => {
  try {
    let idUnidad=req.params.id;
    let deleteResult = await UnidadService.eliminarUnidad(idUnidad);
    if (!deleteResult) {
      res.status(404).send({ error: "Unidad no encontrado" });
    } else {
      res.status(200).send(deleteResult);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.findUnidad = async (req, res) => {
  try {
    let idUnidad = req.params.id;
    let UnidadResult = await UnidadService.findUnidad(idUnidad);

    if (!UnidadResult) {
      res.status(404).send({ error: "Unidad no encontrado" });
    } else {
      res.status(200).send(UnidadResult);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.putUnidad = async (req, res) => {
  try {
    let idUnidad = req.params.id;
    let data = req.body;
    let result = await UnidadService.putUnidad(idUnidad,data);
    if (!result) {
      res.status(404).send({ error: "Unidad no encontrado" });
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
