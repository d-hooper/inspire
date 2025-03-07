import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";

export class WeatherController {
  
  constructor() {
    console.log('🌡️☁️ controller');
    this.getWeather()
  }

  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error('COULD NOT GET WEATHER DATA', error)
      Pop.error(error, 'Could not retrieve weather data')
    }
  }

}