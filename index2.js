const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.listen(3000, () => console.log('http://localhost:3000'))

app.use(bodyParser({ extended: true }))
app.use(bodyParser.json())

const ClienteModel = require('./modelCliente').CriaModelCliente()
const OrcamentoModel = require('./modelOrcamento').CriaModelOrcamento()
const ProjetoModel = require('./modelProjeto').CriaModelProjeto()

app.post('/clienteM', async (req, res) => {
  for (let i = 0; i < 10000; i++) {
    await ClienteModel.create({
      nome: `Cliente ${i}`
    })
    console.log(`Cadastro N° ${i}`)
  }
  res.json('OK')
})

app.get('/clienteM', (req, res) => {
  ClienteModel.find({})
    .then(list => res.json(list))
})

app.post('/orcamentoM', async (req, res) => {
  for (let i = 0; i < 10000; i++) {
    await OrcamentoModel.create({
      id_cliente: '5d1a5e7e031ce23ff4612dca',
      titulo: `Orcamento ${i}`
    })
    console.log(`Cadastro N° ${i}`)
  }
  res.json('OK')
})

app.get('/orcamentoM', (req, res) => {
  OrcamentoModel.find({})
    .then(list => res.json(list))
})

app.post('/projetoM', async (req, res) => {
  for (let i = 0; i < 10000; i++) {
    await ProjetoModel.create({
      titulo: `Projeto ${i}`,
      id_orcamento: '5d1a5eda67c85a14501b507b',
      id_cliente: '5d1a5e7e031ce23ff4612dca'
    })
    console.log(`Cadastro N° ${i}`)
  }
  res.json('OK')
})

app.get('/projetoM', (req, res) => {
  ProjetoModel.find({})
    .populate('id_orcamento', '', OrcamentoModel)
    .populate('id_cliente', '', ClienteModel)
    .then(list => res.json(list))
})
