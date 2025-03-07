import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";
import { api } from "../utils/Axios.js"

class QuotesService {
  
  async getQuote() {
    const response = await api.get('api/quotes')
    console.log(response.data);
    const quote = new Quote(response.data)
    AppState.activeQuote = quote
    console.log(AppState.activeQuote);
  }

}

export const quotesService = new QuotesService()