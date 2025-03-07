export class Image {
  
  constructor(data) {
    this.url = data.originalLink
    this.imgUrls = data.imgUrls
    this.attribution = data.attribution
    this.description = data.description
  }

  get attributionTemplate() {
    return `
    <div class="">
      <span class="mdi mdi-camera-outline"></span>
      <p class="mb-0 fs-5">${this.attribution}</p>
      <p class="mb-0 fs-5">${this.description}</p>
    </div>
    `
  }
}