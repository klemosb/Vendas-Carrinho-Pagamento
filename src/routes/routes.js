import express from 'express';
import CarrinhoController from '../controllers/carrinhoController.js';
import PagamentoController from '../controllers/pagController.js';

import VendasController from '../controllers/vendasController.js';


const router = express.Router();

router.get('/carrinho', CarrinhoController.listarCarrinho);
router.post('/carrinho/adicionar', CarrinhoController.adicionarAoCarrinho);
router.delete('/carrinho/remover/:vendaId', CarrinhoController.removerVendaDoCarrinho);


router.get('/vendas', VendasController.listarVendas);
router.get('/vendas/:id', VendasController.listarVendasPorId);
router.post('/vendas', VendasController.cadastrarVendas);
router.put('/vendas/:id', VendasController.atualizarVendas);
router.delete('/vendas/:id', VendasController.excluirVendas);



router.get('/pagamento', PagamentoController.listarPagamentos)
router.get('/pagamento/:id', PagamentoController.listarPagamentoPorId)
router.get('/pagamento/:venda', PagamentoController.listarPagamentoPorVenda)
router.post('/pagamento', PagamentoController.cadastrarPagamento)
router.put('/pagamento/:id', PagamentoController.atualizarPagamento)
router.delete('/pagamento/:id', PagamentoController.excluirPagamento);


export default router;