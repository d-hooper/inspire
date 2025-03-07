export class Todo {
  constructor(data) {
    this.description = data.description
    this.completed = false
  }

get todoItemTemplate() {
  return `
  <p>${this.description}</p>
  `
}

}