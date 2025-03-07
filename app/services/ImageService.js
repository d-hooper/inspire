import { AppState } from "../AppState.js"
import { api } from "../utils/Axios.js"
import { Image } from "../models/Image.js"

class ImageService {
  async getImage() {
    const response = await api.get('api/images')
    const image = new Image(response.data)
    console.log(image);
    AppState.activeImage = image
  }

}

export const imageService = new ImageService()