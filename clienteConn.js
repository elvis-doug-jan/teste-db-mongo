const mongoose = require('mongoose')
let db = null
const database = 'cliente'

exports.connectCliente = () => {
  if (!db) {
    db = mongoose.createConnection('mongodb://localhost:27017/')
      .useDb(database)
      .on('connected', () => console.log('Conectado no ' + database))
  }
  return db
}
