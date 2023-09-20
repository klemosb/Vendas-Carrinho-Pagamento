import carrinho from '../models/Carrinho.js';
import vendas from '../models/Vendas.js';

class CarrinhoController {

  static listarCarrinho = async (req, res) => {
    const carrinhoItens = await carrinho.find({});
    const nomesDasVendas = [];

    await Promise.all(
      carrinhoItens.map(async (item) => {
        const venda = await vendas.findById(item.vendas);
        if (venda) {
          nomesDasVendas.push(venda.nome);
        }
      })
    );
    res.status(200).json({ nomesDasVendas });
  };



  static adicionarAoCarrinho = (req, res) => {

    const vendaId = req.body.vendas;
    vendas.findById(vendaId, (err, venda) => {
      if (err) {
        return res.status(500).json({ error: 'Erro ao buscar a venda.' });
      }
      if (!venda) {
        return res.status(404).json({ error: 'Venda não encontrada.' });
      }
      const nomeVenda = venda.nome;
      res.status(200).json({ nomeVenda });
    });
  };

}





export default CarrinhoController;
