const Propietario = require("../models/Propietario");

exports.obtenerPropietarios = async (req, res) => {
  let propietarios;
  if (req.query.documento) {
    propietarios = await Propietario.findOne({
      documento: req.query.documento
    });
  } else {
    propietarios = await Propietario.find();
  }

  return propietarios;
};

exports.crearPropietario = async (req, res) => {
  let propietario = req.body;
  let addResult = await Propietario.create(propietario);
  return addResult;
};

exports.eliminarPropietario = async (req, res) => {
  let idPropietario = req.params.id;
  let deleteResult = await Propietario.findByIdAndDelete(idPropietario);
  return deleteResult;
};
exports.findPropietario = async (req, res) => {
  let idPropietario = req.params.id;
  let propietarioResult = await Propietario.findById(idPropietario);
  return propietarioResult;
};

exports.putPropietario = async (req, res) => {
  let idPropietario = req.params.id;
  let data = req.body;
  let result = await Propietario.findByIdAndUpdate(idPropietario, data);
  return result;
};

exports.findPropietarioDoc = async (req, res) => {
  let idPropietario = req.params.id;
  let propietarioResult = await Propietario.find({ documento: idPropietario });
  return propietarioResult;
};
