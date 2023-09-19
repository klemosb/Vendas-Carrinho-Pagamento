import mongoose from 'mongoose';

const vendasSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    pagamento: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'pagamento',
      required: true,
    }
  },
  {
    versionKey: false,
  }
);

const vendas = mongoose.model('vendas', vendasSchema);

export default vendas;

