const ApartamentoService = require("../services/apartamentoService");

exports.obtenerApartamento = async (req, res) => {
  try {
    let apartamento = await ApartamentoService.obtenerApartamento(req);

    res.status(200).send(apartamento);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.crearApartamento = async (req, res) => {
  try {
    let addResult = await ApartamentoService.crearApartamento(req);

    res.status(200).send(addResult);
  } catch (err) {
    res.status(500).send(err);
  }
};
