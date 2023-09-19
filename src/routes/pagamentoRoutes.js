import express from 'express';
import PagamentoController from '../controllers/pagController.js';

const router = express.Router();
router
  .get('/pagamento', PagamentoController.listarPagamentos)
  .get('/pagamento/:id', PagamentoController.listarPagamentoPorId)
  .get('/pagamento/:venda', PagamentoController.listarPagamentoPorVenda)
  .post('/pagamento', PagamentoController.cadastrarPagamento)
  .put('/pagamento/:id', PagamentoController.atualizarPagamento)
  .delete('/pagamento/:id', PagamentoController.excluirPagamento);

export default router;

// Aqui entra todo método criado (controlarores), quando cada requisição for feita;
