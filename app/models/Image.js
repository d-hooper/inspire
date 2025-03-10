export class Image {

  constructor(data) {
    this.originalLink = data.originalLink
    this.imgUrls = data.imgUrls
    this.attribution = data.attribution
    this.description = data.description ?? ''
  }

  get attributionTemplate() {
    return `
        <a class="d-flex align-items-center justify-content-evenly" >
          <span class="mdi mdi-camera-outline fs-4 me-2"></span>
          <p class="mb-0">${this.attribution}</p>
        </a>
      <div class="collapse img-description" id="collapseImgDetails">
        <div>
          ${this.description}
        </div>
      </div>
    `
  }
}