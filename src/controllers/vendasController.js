import pagamento from '../models/Pagamento.js';
import vendas from '../models/Vendas.js';

class VendasController {
  static listarVendas = (req, res) => {
    vendas.find((err, vendas) => {
      res.status(200).json(vendas)
    })
    // vendas.populate('vendas')
  };

  static listarVendasPorId = (req, res) => {
    const id = req.params.id;
    vendas.findById(id, (err, vendas) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Id do Vendas não localizado.` });
      } else {
        res.status(200).send(vendas);
      }
    });
  };

  static cadastrarVendas = (req, res) => {
    let novaVenda = new vendas(req.body);
    novaVenda.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar venda.` });
      } else {
        res.status(201).send(novaVenda.toJSON());
      }
    });
  };

  static atualizarVendas = (req, res) => {
    const id = req.params.vendas;
    console.log(id)
    vendas.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Vendas atualizado com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static excluirVendas = (req, res) => {
    const id = req.params.id;

    vendas.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Venda(s) removida(s) com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

};
export default VendasController;
