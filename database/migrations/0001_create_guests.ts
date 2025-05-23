import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Guests extends BaseSchema {
  protected tableName = 'guests'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.text('message').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}