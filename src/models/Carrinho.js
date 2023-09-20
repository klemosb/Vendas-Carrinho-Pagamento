import mongoose from 'mongoose';

const carrinhoSchema = new mongoose.Schema(
  {
    vendas: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'vendas',
      required: true,
    }
  },
  {
    versionKey: false,
  }
);
const carrinho = mongoose.model('carrinhos', carrinhoSchema);
export default carrinho;

