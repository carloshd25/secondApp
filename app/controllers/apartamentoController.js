const ApartamentoService = require("../services/apartamentoService");

exports.obtenerApartamento = async (req, res) => {
  try {

    let numero =req.query.numero;

    let apartamento = await ApartamentoService.obtenerApartamento(numero);

    res.status(200).send(apartamento);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.crearApartamento = async (req, res) => {
  try {
    let apartamento = req.body;

    let addResult = await ApartamentoService.crearApartamento(apartamento);

    res.status(200).send(addResult);
  } catch (err) {
    res.status(500).send(err);
  }
};
