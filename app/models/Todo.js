export class Todo {
  constructor(data) {
    this.id = data.id
    this.description = data.description
    this.completed = data.completed
  }

get todoItemTemplate() {
  return /*html*/`
  
  <div class="d-flex mx-2 align-items-center justify-content-between">
    <div class="d-flex">
    <input role="button" onchange="app.todosController.toggleCompleteTodo('${this.id}')" type="checkbox" ${this.completed ? 'checked' : ''} title="Mark task complete">
    <p class="mb-0 fs-5 ms-1 pb-1">${this.description}</p>
    </div>
    <span onclick="" role="button" class="mdi mdi-delete-circle-outline fs-4" title="Delete task: ${this.description}"></span>
  </div>
  `
}

}