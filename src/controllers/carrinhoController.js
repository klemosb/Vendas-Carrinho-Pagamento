import mongoose from 'mongoose';
import Carrinho from '../models/Carrinho.js';
import Vendas from '../models/Vendas.js';

export default class CarrinhoController {

  static adicionarAoCarrinho = async (req, res) => {
    try {
      const vendaId = req.body.vendaId;

      const venda = await Vendas.findById(vendaId);

      if (!venda) {
        return res.status(404).json({ error: 'Venda não encontrada.' });
      }

      const carrinho = await Carrinho.findById('650d960c6d226c5e144cae97');
      carrinho.vendasAdicionadas.push(venda);
      await carrinho.save();

      const nomeVenda = venda.nome;
      res.status(200).json({ nomeVenda });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao adicionar a venda no carrinho.' });
    }
  };

  static async listarCarrinho(req, res) {

    try {
      const carrinho = await Carrinho.findById('650d960c6d226c5e144cae97');
      res.status(200).json({ vendasAdicionadas: carrinho.vendasAdicionadas });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar o carrinho.' });
    }
  }
  static removerVendaDoCarrinho = async (req, res) => {
    try {
      const { vendaId } = req.params;

      const carrinho = await carrinho.findOne({});
      if (!carrinho) {
        return res.status(404).json({ error: 'Carrinho não encontrado.' });
      }

      // Remover a venda pelo ID do carrinho
      carrinho.vendas = carrinho.vendas.filter((id) => id.toString() !== vendaId);

      await carrinho.save();

      res.status(200).json({ message: 'Venda removida do carrinho com sucesso.' });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao remover a venda do carrinho.' });
    }
  }


};


