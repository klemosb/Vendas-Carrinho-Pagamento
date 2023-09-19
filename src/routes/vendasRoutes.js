import express from 'express';
import VendasController from '../controllers/vendasController.js';

const router = express.Router();
router
  .get('/vendas', VendasController.listarVendas)
  .get('/vendas/:id', VendasController.listarVendasPorId)
  .post('/vendas', VendasController.cadastrarVendas)
  .put('/vendas/:id', VendasController.atualizarVendas)
  .delete('/vendas/:id', VendasController.excluirVendas);

export default router;
