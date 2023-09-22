import express from 'express';
import CarinhoController from '../controllers/carrinhoController.js';

const router = express.Router();
router
  .get('/carrinho', CarinhoController.listarCarrinho)
  .post('/carrinho/adicionar', CarinhoController.adicionarAoCarrinho)
  .delete('/carrinho/remover', CarinhoController.removerVendaDoCarrinho)
// .get('/carrinho/:id', CarinhoController.listarVendasPorId)
// .post('/carrinho', CarinhoController.adicionarAoCarrinho)
// .put('/carrinho/:id', CarinhoController.atualizarVendas)
// .delete('/carrinho/:id', CarinhoController.excluirVendas);

export default router;
