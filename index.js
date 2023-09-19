import express from 'express';
import pagamento from "./src/routes/pagamentoRoutes.js"
import vendas from './src/routes/vendasRoutes.js';
import carrinho from './src/routes/carrinhoRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'Cuide das suas vendas conosco' });
  });

  app.use(express.json(), pagamento, vendas, carrinho);
};
export default routes;
// O objetivo desse index.js é juntar todas as rotas criadas, por organização, porque se tiver várias rotas, fica mais organizado.
