import { AppState } from "../AppState.js";
import { imageService } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js";

export class ImagesController {
  
  constructor() {
    console.log('🖼️ controller');
    AppState.on('activeImage', this.drawImage)
    this.getImage()
  }

  drawImage() {
    const image = AppState.activeImage
    const activeContent = image.attributionTemplate
    const activeImageElem = document.getElementById('imgAttribution')
    activeImageElem.innerHTML = activeContent
    document.body.style.backgroundImage  = `url(${image.imgUrls.full})`
  }

  async getImage() {
    try {
      await imageService.getImage()
    } catch (error) {
      console.error('COULD NOT GET IMAGE', error);
      Pop.error(error, 'Could not retrieve image')
    }
  }

  showAttributionToast() {
    const image = AppState.activeImage
    if (image.description != '' || null || undefined) {
      return
    }
    Pop.toast('No description provided')
  }
}