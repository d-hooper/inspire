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
    <div>
      <a class="d-flex align-items-center justify-content-evenly" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <span class="mdi mdi-camera-outline fs-4 me-2"></span>
        <p class="mb-0">${this.attribution}</p>
      </a>
      <div id="collapseExample" class="d-flex justify-content-center collapse">
        ${this.description}
      </div>
    </div>
    `
  }
}