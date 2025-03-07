export class Weather {
  constructor(data) {
    this.name = data.name
    this.weather = data.weather
    this.main = data.main
    this.icon = data.icon
  }

  get tempCelsius() {
    const tempKelvin =  this.main.temp
    const tempCelsius = tempKelvin - 273.15
    return Math.round(tempCelsius)
  }
  
  get tempFahrenheit() {
    const tempKelvin =  this.main.temp
    const tempCelsius = tempKelvin - 273.15
    const tempFahrenheit = tempCelsius * (9 / 5) + 32
    return Math.round(tempFahrenheit)
  }

  get weatherConditions() {
    return this.weather[0].main
  }

  get iconUrl() {
    return this.weather.icon
  }

  get weatherCardTemplate() {
    return `
    <p>C: ${this.tempCelsius}</p>
    <p>F: ${this.tempFahrenheit}</p>
    <img src="${this.iconUrl}">
    <p>${this.weatherConditions}</p>
    `
  }
}

