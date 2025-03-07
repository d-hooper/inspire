export class Image {
  
  constructor(data) {
    this.originalLink = data.originalLink
    this.imgUrls = data.imgUrls
    this.attribution = data.attribution
    this.description = data.description ?? ''
  }

  get descriptionString() {
    if (this.description == '') {
      return
    }
    return `
    <p class="mb-0 fs-5">${this.description}</p>
    `
  }

  get attributionTemplate() {
    return `
    <div >
      <div class="d-flex align-items-center">
        <span class="mdi mdi-camera-outline fs-4"></span>
        <p class="mb-0">${this.attribution}</p>
      </div>
      ${this.description}
    </div>
    `
  }
}