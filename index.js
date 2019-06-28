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

  for (let i = 0; i < 1000000; i++) {
    await knex.raw(`insert into teste."Table1" values ('${v4()}', 'User${i}')`)
  }

  await knex.raw(`select * from teste."Table1"`)
    .then(result => res.json(result))

  // res.json('ok')
})
