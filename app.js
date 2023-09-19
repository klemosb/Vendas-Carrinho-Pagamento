import express from 'express';
import db from './src/config/dbConnect.js';
import routes from './index.js';

//Iniciando o servidor e escutando uma porta:
db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('Conexão feita com sucesso');
});
// Passando a instância do express para utiliziar as rotas:
const app = express();
app.use(express.json()); //Faz interpretar o que tá chegando via POST ou PUT
routes(app);

export default app;

// O App deve estar bem limpo, visto que todos os métodos vão estar nos controladores e todas as rotas nas rotas específicas.
