# Air-quality

<!-- GETTING STARTED -->

### Installation

1. Install NPM packages
   ```sh
   npm install
   ```
2. Start server
   ```sh
   node ace serve --watch
   ```
3. Run migration
   ```sh
   node ace migration:run
   ```
4. Run the sheduler (CRON)
   ```sh
   node ace scheduler:run
   ```
5. Run the test
   ```sh
   node ace test
   ```
   
### Example

1. Request GET : `http://127.0.0.1:3333/api/getAirQuality?lat=48.856613&lon=2.352222`

   ```cmd
   curl --location --request GET 'http://127.0.0.1:3333/api/getAirQuality?lat=48.856613&lon=2.352222'
   ```

   ```json
   {
    "Result": {
        "Pollution": {
            "ts": "2022-12-03T00:00:00.000Z",
            "aqius": 57,
            "mainus": "p2",
            "aqicn": 22,
            "maincn": "p2"
        }
      }
    }
   ```
2. Request GET : `http://127.0.0.1:3333/api/getMostPollutedTime`

   ```json
   {
    "date": "02/12/2022",
    "time": "00:05:01"
   }
   ```
