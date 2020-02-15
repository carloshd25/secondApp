const Propietario = require("../models/Propietario");
const Unidad = require("../models/Unidad");
const Apartamento = require("../models/apartamento");

exports.obtenerPropietarios = async (documento) => {
  let propietarios;
  if (documento) {
    propietarios = await Propietario.findOne({
      documento: documento
    }).populate({
      path: "apartamentos",
      model: Apartamento,
      select: "numero piso unidad",
      populate: { path: "unidad", model: Unidad, select: "nombre pisos constructora" }
    });
  } else {
    propietarios = await Propietario.find().populate({
      path: "apartamentos",
      model: Apartamento,
      select: "numero piso unidad",
      populate: { path: "unidad", model: Unidad, select: "nombre pisos constructora" }
    });


     // .populate({ path: "apartamentos", select: "numero piso unidad" });
      
  }

  return propietarios;
};

exports.crearPropietario = async (propietario) => {
  
  let addResult = await Propietario.create(propietario);
  return addResult;
};

exports.eliminarPropietario = async (idPropietario) => {
  
  let deleteResult = await Propietario.findByIdAndDelete(idPropietario);
  return deleteResult;
};
exports.findPropietario = async (idPropietario) => {
  
  let propietarioResult = await Propietario.findById(idPropietario);
  return propietarioResult;
};

exports.putPropietario = async (idPropietario,propietario) => {
  
  let result = await Propietario.findByIdAndUpdate(idPropietario, propietario, {new: true});
  return result;
};

exports.findPropietarioDoc = async (documento) => {
  
  let propietarioResult = await Propietario.find({ documento: documento });
  return propietarioResult;
};
