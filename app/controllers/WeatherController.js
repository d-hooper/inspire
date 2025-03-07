import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";

export class WeatherController {

  constructor() {
    console.log('🌡️☁️ controller');
    setInterval(this.drawTime, 1000)
    AppState.on('weatherCity', this.drawWeather)
    this.getWeather()
  }

  drawWeather() {
    const weather = AppState.weatherCity
    const weatherContent = weather.weatherCardTemplate
    const weatherElem = document.getElementById('weatherInfo')
    weatherElem.innerHTML = weatherContent
  }

  drawTime() {
    const time = new Date().toLocaleTimeString()
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

  changeTempPreference() {
    weatherService.changeTempPreference()
  }

}