import express from 'express';
import CarrinhoController from '../controllers/carrinhoController.js';
import VendasController from '../controllers/VendasController.js';

const router = express.Router();

router.get('/carrinho', CarrinhoController.listarCarrinho);
router.post('/carrinho/adicionar', CarrinhoController.adicionarAoCarrinho);
router.delete('/carrinho/remover/:vendaId', CarrinhoController.removerVendaDoCarrinho);


router.get('/vendas', VendasController.listarVendas);
router.get('/vendas/:id', VendasController.listarVendasPorId);
router.post('/vendas', VendasController.cadastrarVendas);
router.put('/vendas/:id', VendasController.atualizarVendas);
router.delete('/vendas/:id', VendasController.excluirVendas);


export default router;