import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig = {
  connection: process.env.DB_CONNECTION || 'sqlite',
  connections: {
    sqlite: {
      client: 'sqlite3',
      connection: {
        filename: './db.sqlite3',
      },
      useNullAsDefault: true,
      migrations: {
        naturalSort: true,
      },
    },
  },
}

export default databaseConfig