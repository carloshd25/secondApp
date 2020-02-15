const UnidadService = require("../services/unidadesService");

exports.obtenerUnidad = async (req, res) => {
  try {
    let Unidades = await UnidadService.obtenerUnidad(req);

    res.status(200).send(Unidades);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.crearUnidad = async (req, res) => {
  try {
    let addResult = await UnidadService.crearUnidad(req);
    res.status(200).send(addResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.eliminarUnidad = async (req, res) => {
  try {
    let deleteResult = await UnidadService.eliminarUnidad(req);
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
    let UnidadResult = await UnidadService.findUnidad(req);

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
    let result = await UnidadService.putUnidad(req);
    if (!result) {
      res.status(404).send({ error: "Unidad no encontrado" });
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
