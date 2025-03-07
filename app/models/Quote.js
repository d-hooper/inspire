export class Quote{

  constructor(data) {
    this.quote = data.quote
    this.author = data.author
    this.source = data.source
  }

  get quoteTemplate() {
    return `
    <div id="quoteBody">
      <p class="mb-0">${this.quote}</p>
    </div>
    <div>
      <p class="mb-0 text-end">- ${this.author}</p>
    </div>
    `
  }
}