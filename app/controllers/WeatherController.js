import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";

export class WeatherController {

  constructor() {
    console.log('🌡️☁️ controller');
    AppState.on('weatherCity', this.drawWeather)
    this.getWeather()
    this.drawTime()
  }

  drawWeather() {
    const weather = AppState.weatherCity
    const weatherContent = weather.weatherCardTemplate
    const weatherElem = document.getElementById('weatherInfo')
    weatherElem.innerHTML = weatherContent
  }

  drawTime() {
    const time = new Date().toLocaleTimeString()
    console.log(time);
    const timeElem = document.getElementById('time')
    timeElem.innerText = time.toString()
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