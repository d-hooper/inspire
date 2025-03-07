import { api } from "../utils/Axios.js"

class QuotesService {
  
  async getQuote() {
    const response = await api.get('api/quotes')
    console.log(response.data);
  }

}

export const quotesService = new QuotesService()