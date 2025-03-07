import { AppState } from "../AppState.js";
import { imageService } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js";

export class ImagesController {
  
  constructor() {
    console.log('🖼️ controller');
    this.getImage()
  }



  async getImage() {
    try {
      await imageService.getImage()
    } catch (error) {
      console.log('COULD NOT GET IMAGE', error);
      Pop.error(error, 'Could not retrieve image')
    }
  }
}