const { Schema } = require('mongoose')
const { connectCliente } = require('./clienteConn')

const ClienteSchema = new Schema({
  nome: { type: String },
}, {
    timestamps: {
      createdAt: 'criadoEm',
      updatedAt: 'alteradoEm'
    },
    versionKey: false
  })

function CriaModelCliente() {
  const db = connectCliente()
  return db.models.cliente || db.model('cliente', ClienteSchema)
}

module.exports = {
  ClienteSchema,
  CriaModelCliente
}