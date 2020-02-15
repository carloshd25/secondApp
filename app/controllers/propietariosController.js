const PropietarioService = require("../services/propietarioService");

exports.obtenerPropietarios = async (req, res) => {
  try {
    let documento=req.query.documento;
    let propietarios = await PropietarioService.obtenerPropietarios(documento);

    res.status(200).send(propietarios);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.crearPropietario = async (req, res) => {
  try {
    let propietario = req.body;
    let addResult = await PropietarioService.crearPropietario(propietario);
    res.status(200).send(addResult);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.eliminarPropietario = async (req, res) => {
  try {
    let idPropietario = req.params.id;
    let deleteResult = await PropietarioService.eliminarPropietario(idPropietario);
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
    let idPropietario = req.params.id;
    let propietarioResult = await PropietarioService.findPropietario(idPropietario);

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
    let idPropietario = req.params.id;
    let propietario = req.body;
    let result = await PropietarioService.putPropietario(idPropietario,propietario);
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
    let documento = req.params.id;
    let propietarioResult = await PropietarioService.findPropietarioDoc(documento);
    if (!propietarioResult) {
      res.status(404).send({ error: "propietario no encontrado" });
    } else {
      res.status(200).send(propietarioResult);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
