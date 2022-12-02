// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import axios from "axios";
import Database from "@ioc:Adonis/Lucid/Database";


export default class CheckAirQualitiesController {
  public async getMostPollutedTime({response}: HttpContextContract) {
    const date = await Database
      .from('air_qualities')//
      .select('created_at')
      .max('aqius')
      .max('created_at')
      .limit(1)

    const dateVar = new Date(date[0].created_at);
    return response.ok({"date":dateVar.toLocaleDateString(), "time": dateVar.toLocaleTimeString()});
  }

  public async getAirQuality({response,request}: HttpContextContract) {
    const lat = request.input("lat")
    const long = request.input("lon")
    const { data } = await axios.get(`http://api.airvisual.com/v2/nearest_city?lat=${{lat}}&lon=${{long}}&key=0be3215d-89a8-4c0a-a756-64e86b1a00f5`)
    return response.ok({"Result": {"Pollution": data.data.current.pollution}});
  }
}
