export class Weather {
  constructor(data) {
    this.weather = data.weather
    this.main = data.main
    this.icon = data.icon
  }

  get weatherCardTemplate() {
    return `
    
    `
  }
}

