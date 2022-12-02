import { BaseTask } from 'adonis5-scheduler/build'
import axios from "axios";
import AirQuality from "App/Models/AirQuality";

export default class CheckAirQuality extends BaseTask {
	public static get schedule() {
		return ' */1 * * * *'
	}
	/**
	 * Set enable use .lock file for block run retry task
	 * Lock file save to `build/tmpTaskLock`
	 */
	public static get useLock() {
		return false
	}

	public async handle() {
    const { data } = await axios.get(`http://127.0.0.1:3333/api/getAirQuality?lat=48.856613&lon=2.352222&key=0be3215d-89a8-4c0a-a756-64e86b1a00f5`)
    console.log("Handled", data)

    await AirQuality.create(data.Result.Pollution);
	}
}
