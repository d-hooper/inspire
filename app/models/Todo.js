export class Todo {
  constructor(data) {
    this.id = data.id
    this.description = data.description
    this.completed = data.completed
  }

get todoItemTemplate() {
  return /*html*/`
  
  <!-- <div class="input-group mb-3">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="checkbox" ${this.completed ? 'checked' : ''} aria-label="Checkbox for following task">
  </div>
  <input type="text" class="form-control" aria-label="Task with checkbox to mark completed">
</div> -->


  <div class="d-flex mx-2 align-items-center justify-content-between">
    <div class="d-flex">
    <input role="button" onchange="app.todosController.toggleCompleteTodo('${this.id}')" type="checkbox" ${this.completed ? 'checked' : ''} title="Mark task complete">
    <p class="mb-0 fs-5 ms-1 pb-1">${this.description}</p>
    </div>
    <span onclick="app.todosController.deleteTodo('${this.id}')" role="button" class="mdi mdi-delete-circle-outline fs-4 delete-task" title="Delete task: ${this.description}"></span>
  </div>
  `
}

}