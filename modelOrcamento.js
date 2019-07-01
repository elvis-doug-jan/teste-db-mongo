const { Schema } = require('mongoose')
const { connectOrcamento } = require('./orcamentoConn')

const OrcamentoSchema = new Schema({
  titulo: { type: String },
  id_cliente: { type: Schema.Types.ObjectId }
}, {
    timestamps: {
      createdAt: 'criadoEm',
      updatedAt: 'alteradoEm'
    },
    versionKey: false
  })

function CriaModelOrcamento() {
  const db = connectOrcamento()
  return db.models.orcamento || db.model('orcamento', OrcamentoSchema)
}

module.exports = {
  OrcamentoSchema,
  CriaModelOrcamento
}