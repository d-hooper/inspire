import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";

export class QuoteController {
  
  constructor() {
    console.log('📝 quote controller');
    this.getQuote()
  }

  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      console.log('COULD NOT GET QUOTE', error);
      Pop.error(error, 'Could not retrieve a quote')
    }
  }
}