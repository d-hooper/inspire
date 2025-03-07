import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { Pop } from "../utils/Pop.js";

export class TodosController {

  constructor() {
    console.log('✔️ controller');
    AppState.on('identity', this.getTodos)
    AppState.on('todos', this.drawTodoList)
  }

  drawTodoList() {
    const tasks = AppState.todos
    let tasksContent = ''
    tasks.forEach(task => tasksContent += task.todoItemTemplate)
    const todoListElem = document.getElementById('todoList')
    todoListElem.innerHTML = tasksContent
  }

  async getTodos() {
    try {
      await todosService.getTodos()
    } catch (error) {
      console.log('COULD NOT GET TODO LIST', error);
      Pop.error(error, 'Could not get To-Do List')
    }
  }
}