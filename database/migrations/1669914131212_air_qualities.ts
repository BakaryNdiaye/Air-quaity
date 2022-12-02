import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AirQualities extends BaseSchema {
  protected tableName = 'air_qualities'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('ts', 255)
      table.integer('aqius')
      table.string('mainus', 255)
      table.integer('aqicn')
      table.string('maincn', 255)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
