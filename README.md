# Air quality

<!-- GETTING STARTED -->

### Installation

1. Install NPM packages
   ```sh
   npm install
   ```
2. file `.env` content
   ```yml
    PORT=3333
    HOST=0.0.0.0
    NODE_ENV=development
    APP_KEY=J4nze9spwIHzW4XMuvkKarcVBIF7ZxXQ
    DRIVE_DISK=local
    DB_CONNECTION=mysql
    MYSQL_HOST=localhost
    MYSQL_PORT=3306
    MYSQL_USER=root
    MYSQL_PASSWORD=
    MYSQL_DB_NAME=airquality
   ```
3. Start server
   ```sh
   node ace serve --watch
   ```
4. Run migration
   ```sh
   node ace migration:run
   ```
5. Run the sheduler (CRON)
   ```sh
   node ace scheduler:run
   ```
6. Run the test
   ```sh
   node ace test
   ```

### Example

1. Request GET : `http://127.0.0.1:3333/api/getAirQuality?lat=48.856613&lon=2.352222`

   Endpoint to get “air quality “ for the given zone

   ```sh
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

    Endpoint to get datetime( date and time ) where the paris zone is the most polluted ( based on your CRON JOB results).

    ```sh
   curl --location --request GET 'http://127.0.0.1:3333/api/getAirQuality?lat=48.856613&lon=2.352222'
   ```

   ```json
   {
    "date": "02/12/2022",
    "time": "00:05:01"
   }
   ```
### Documentation link : 
Swagger UI : [http://localhost:3333/docs](http://localhost:3333/docs)


Swagger OpenApi : [http://localhost:3333/swagger](http://localhost:3333/swagger)
