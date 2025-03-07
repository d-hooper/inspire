import { api } from "../utils/Axios.js"

class WeatherService {
  async getWeather() {
  const response = await api.get('api/weather')
  console.log(response.data);
  }

}

export const weatherService = new WeatherService()