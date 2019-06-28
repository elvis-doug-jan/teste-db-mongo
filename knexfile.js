module.exports = {
  client: 'pg',
  connection: {
    database: 'postgres',
    user: 'postgres',
    password: 'root'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}
