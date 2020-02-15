const Unidad = require("../models/Unidad");
const Apartamento = require("../models/apartamento");
const Propietario = require("../models/Propietario");

exports.obtenerUnidad = async (req, res) => {
  let Unidades = await Unidad.find().populate({
    path: "apartamentos",
    model: Apartamento,
    select: "numero piso propietario",
    populate: { path: "propietario", model: Propietario, select: "nombre" }
  });

  return Unidades;
};

exports.crearUnidad = async req => {
  let unidad = req.body;
  let addResult = await Unidad.create(unidad);
  return addResult;
};

exports.eliminarUnidad = async req => {
  let idUnidad=req.params.id;
  let deleteResult = await Unidad.findByIdAndDelete(idUnidad);

  return deleteResult;
};
exports.findUnidad = async (req, res) => {
  let idUnidad = req.params.id;
  let UnidadResult = await Unidad.findById(idUnidad).populate({
    path: "apartamentos",
    model: Apartamento,
    select: "numero piso propietario",
    populate: { path: "propietario", model: Propietario, select: "nombre" }
  });
  return UnidadResult;
};

exports.putUnidad = async (req, res) => {
  let idUnidad = req.params.id;
  let data = req.body;
  let result = await Unidad.findByIdAndUpdate(idUnidad, data);

  return result;
};
