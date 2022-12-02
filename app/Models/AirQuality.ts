import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class AirQuality extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public ts: string

  @column()
  public aqius: number

  @column()
  public mainus: string

  @column()
  public aqicn: number;

  @column()
  public maincn: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
