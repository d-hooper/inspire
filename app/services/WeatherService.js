import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "../utils/Axios.js"

class WeatherService {
  async getWeather() {
    const response = await api.get('api/weather')
    const weather = new Weather(response.data)
    AppState.weatherCity = weather
  }
  
  changeTempPreference() {
    const weather = AppState.weatherCity
    if (weather.tempPreference == 'celsius') {
      weather.tempPreference = 'fahrenheit'
    }
    else {
      weather.tempPreference = 'celsius'
    }
  }
}

export const weatherService = new WeatherService()