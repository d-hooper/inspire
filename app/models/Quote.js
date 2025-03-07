export class Quote{

  constructor(data) {
    this.quote = data.quote
    this.author = data.author
    this.source = data.source
  }

  get quoteTemplate() {
    return `
    <p>${this.quote}</p>
    <p>- ${this.author}</p>
    `
  }
}