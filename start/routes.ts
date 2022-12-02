import Route from '@ioc:Adonis/Core/Route'
import AutoSwagger from "adonis-autoswagger";
import swagger from "Config/swagger";

Route.get("/swagger", async () => {
  // @ts-ignore
  return AutoSwagger.docs(Route.toJSON(), swagger);
});

Route.get("/docs", async () => {
  return AutoSwagger.ui("/swagger");
});

Route.group(() => {
  Route.get('getMostPollutedTime', 'CheckAirQualitiesController.getMostPollutedTime')
  Route.get('getAirQuality', 'CheckAirQualitiesController.getAirQuality')
}).prefix("api");
