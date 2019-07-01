const { Schema } = require('mongoose')
const { connectProjeto } = require('./projetoConn')

const ProjetoSchema = new Schema({
  titulo: { type: String },
  id_orcamento: { type: Schema.Types.ObjectId, ref: 'orcamento' },
  id_cliente: { type: Schema.Types.ObjectId, ref: 'cliente' }
}, {
    timestamps: {
      createdAt: 'criadoEm',
      updatedAt: 'alteradoEm'
    },
    versionKey: false
  })

function CriaModelProjeto() {
  const db = connectProjeto()
  return db.models.projeto || db.model('projeto', ProjetoSchema)
}

module.exports = {
  ProjetoSchema,
  CriaModelProjeto
}