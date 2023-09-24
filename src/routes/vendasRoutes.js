import express from 'express';
import VendasController from '../controllers/VendasController.js'

const router = express.Router();
router
  .get('/vendas', VendasController.listarVendas)
  .get('/vendas/:id', VendasController.listarVendasPorId)
  .post('/vendas', VendasController.cadastrarVendas)
  .put('/vendas/:vendas', VendasController.atualizarVendas)
  .delete('/vendas/:id', VendasController.excluirVendas);

export default router;
