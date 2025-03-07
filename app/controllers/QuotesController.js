import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";

export class QuoteController {
  
  constructor() {
    console.log('📝 quote controller');
    AppState.on('activeQuote', this.drawQuote)
    this.getQuote()
  }

  drawQuote() {
    const quote = AppState.activeQuote
    const quoteContent = quote.quoteTemplate
    const quoteElem = document.getElementById('quote')
    quoteElem.innerHTML = quoteContent
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