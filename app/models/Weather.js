export class Weather {
  constructor(data) {
    this.name = data.name
    this.weather = data.weather
    this.main = data.main
    this.icon = data.icon
    this.tempPreference = 'celsius'
  }

  get tempCelsius() {
    const tempKelvin =  this.main.temp
    const tempCelsius = tempKelvin - 273.15
    return `<span class="mdi mdi-thermometer"></span> ${Math.round(tempCelsius)} &#8451;`
  }
  
  get tempFahrenheit() {
    const tempKelvin =  this.main.temp
    const tempCelsius = tempKelvin - 273.15
    const tempFahrenheit = tempCelsius * (9 / 5) + 32
    return `<span class="mdi mdi-thermometer"></span> ${Math.round(tempFahrenheit)} &#8457;`
  }

  get tempTitle() {
    if (this.tempPreference == 'celsius'){
      return 'Fahrenheit'
    }
    return 'Celsius'
  }

  get tempPreferenceData() {
    if(this.tempPreference == 'celsius') {
      return this.tempCelsius
    }
    return this.tempFahrenheit
  }

  get weatherConditions() {
    return this.weather[0].main
  }

  get iconUrl() {
    return this.weather.icon
  }

  get weatherCardTemplate() {
    return /*html*/`
        <div onclick="app.weatherController.changeTempPreference()" role="button" class="border border-tertiary rounded d-flex align-items-center p-2"
          title="Change to ${this.tempTitle}">
          <div class="">
            <p class="mb-0 p-2">${this.tempPreferenceData}</p>
            <p class="mb-0 text-center">${this.weatherConditions}</p>
          </div>
          <div>
            <img src="${this.iconUrl}">
          </div>
      </div>
    `
  }
}

