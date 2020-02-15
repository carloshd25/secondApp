const Apartamento = require("../models/apartamento");
const Unidad = require("../models/Unidad");
const Propietario = require("../models/Propietario");

exports.obtenerApartamento = async req => {
  let apartamento;
  if (req.query.numero) {
    apartamento = await Apartamento.findOne({ numero: req.query.numero });
  } else {
    //apartamento = await Apartamento.find().populate('unidad','nombre pisos constructora');

    apartamento = await Apartamento.find()
      .populate({ path: "unidad", select: "nombre pisos constructora" })
      .populate({ path: "propietario", select: "nombre" });
  }
  return apartamento;
};

exports.crearApartamento = async req => {
  let apartamento = req.body;
  let addResult = await Apartamento.create(apartamento);

  let unidad = await Unidad.findById(req.body.unidad);

  unidad.apartamentos.push(addResult);
  unidad.save();

  let propietario = await Propietario.findById(req.body.propietario);
  propietario.apartamentos.push(addResult);
  propietario.save();

  return addResult;
};
