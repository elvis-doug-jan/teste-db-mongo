const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const knex = require('./config')
const { v4 } = require('uuid')

app.listen(3000, () => console.log('http://localhost:3000'))

app.use(bodyParser({ extended: true }))
app.use(bodyParser.json())

// function select(req, res) {
//   return knex.raw(`select * from public."Table2" as t1, teste."Table1" as t2 where t1.id = t2.id`)
//     .then(result => (result.rows))
// }

app.get('/', async (req, res) => {
  //   .then(result => res.json(result))

  for (let i = 1; i < 10000; i++) {
    // await knex.raw(`insert into teste."Table1" values ('${v4()}', 'User${i}')`)
    // await knex.raw(`insert into clientes.cliente values ('${v4()}', 'Fulano ${i}')`)
    // await knex.raw(`insert into orcamentos.orcamentos values ('${v4()}', 'Novo orçamento ${i}', 'da8c2c9b-0881-43ed-b491-4c0afa7f63b9')`)
    await knex.raw(`insert into projetos.projeto values('${v4()}', 'Novo projeto ${i}', '81da9688-c232-4e86-8cdd-6de1aade164f', 'da8c2c9b-0881-43ed-b491-4c0afa7f63b9')`)
  }

  // await knex.raw(`select * from teste."Table1"`)
  //   .then(result => res.json(result))

  res.json('ok')
})
