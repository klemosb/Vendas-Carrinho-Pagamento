import express from 'express';
import CarrinhoController from './src/controllers/CarrinhoController.js';


const router = express.Router();


router.get('/carrinho', CarrinhoController.listarCarrinho);
router.post('/carrinho/adicionar', CarrinhoController.adicionarAoCarrinho);
router.delete('/carrinho/remover/:id', CarrinhoController.removerVendaDoCarrinho);


export default router;
