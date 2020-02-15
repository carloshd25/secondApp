const Unidad = require("../models/Unidad");
const Apartamento = require("../models/apartamento");
const Propietario = require("../models/Propietario");

exports.obtenerUnidad = async () => {
  let Unidades = await Unidad.find().populate({
    path: "apartamentos",
    model: Apartamento,
    select: "numero piso propietario",
    populate: { path: "propietario", model: Propietario, select: "nombre" }
  });

  return Unidades;
};

exports.crearUnidad = async unidad => {
  
  let addResult = await Unidad.create(unidad);
  return addResult;
};

exports.eliminarUnidad = async idUnidad => {
  
  let deleteResult = await Unidad.findByIdAndDelete(idUnidad);

  return deleteResult;
};
exports.findUnidad = async (idUnidad) => {
  
  let UnidadResult = await Unidad.findById(idUnidad).populate({
    path: "apartamentos",
    model: Apartamento,
    select: "numero piso propietario",
    populate: { path: "propietario", model: Propietario, select: "nombre" }
  });
  return UnidadResult;
};

exports.putUnidad = async (idUnidad, data) => {
  
  let result = await Unidad.findByIdAndUpdate(idUnidad, data, {new: true});

  return result;
};
