import carrinho from '../models/Carrinho.js';
import vendas from '../models/Vendas.js';

class CarrinhoController {
  static listarCarrinho = (req, res) => {
    carrinho.find((err, carrinho) => {
      res.status(200).json(novaVendaNoCarrinho)
    })
    // vendas.populate('vendas')
  };
  static adicionarAoCarrinho = (req, res) => {
    const vendaId = req.query.venda;
    vendas.findById(vendaId, (err, venda) => {
      if (err) {
        return res.status(500).json({ error: 'Erro ao buscar a venda.' });
      }
      const novaVendaNoCarrinho = new carrinho({ vendas: venda });
      novaVendaNoCarrinho.save((err) => {
        res.status(201).json({ message: 'Venda adicionada ao carrinho com sucesso.' });
      });
    });
  };
};



;
export default CarrinhoController;
