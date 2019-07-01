const mongoose = require('mongoose')
let db = null
const database = 'orcamento'

exports.connectOrcamento = () => {
  if (!db) {
    db = mongoose.createConnection('mongodb://localhost:27017/')
      .useDb(database)
      .on('connected', () => console.log('Conectado no ' + database))
  }
  return db
}
