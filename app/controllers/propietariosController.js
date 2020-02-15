const PropietarioService = require("../services/propietarioService");

exports.obtenerPropietarios = async (req, res) => {
  try {
    let propietarios = await PropietarioService.obtenerPropietarios(req);

    res.status(200).send(propietarios);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.crearPropietario = async (req, res) => {
  try {
    let addResult = await PropietarioService.crearPropietario(req);
    res.status(200).send(addResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.eliminarPropietario = async (req, res) => {
  try {
    let deleteResult = await PropietarioService.eliminarPropietario(req);
    if (!deleteResult) {
      res.status(404).send({ error: "propietario no encontrado" });
    } else {
      res.status(200).send(deleteResult);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.findPropietario = async (req, res) => {
  try {
    let propietarioResult = await PropietarioService.findPropietario(req);

    if (!propietarioResult) {
      res.status(404).send({ error: "propietario no encontrado" });
    } else {
      res.status(200).send(propietarioResult);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.putPropietario = async (req, res) => {
  try {
    let result = await PropietarioService.putPropietario(req);
    if (!result) {
      res.status(404).send({ error: "propietario no encontrado" });
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.findPropietarioDoc = async (req, res) => {
  try {
    let propietarioResult = await PropietarioService.findPropietarioDoc;
    if (!propietarioResult) {
      res.status(404).send({ error: "propietario no encontrado" });
    } else {
      res.status(200).send(propietarioResult);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
