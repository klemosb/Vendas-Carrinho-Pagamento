// Criando um servidor local com http nativo do Node(ainda não com o Express). Ele vai escutar isso numa porta para fazer requisições.
import app from "./app.js";
// Criando uma porta pra escutar as requisições. Neste caso, pode ser usado uma porta em ambiente de produção ou a local (3000)
const port = process.env.PORT || 27017;
// Onde ele vai escutar:
app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
