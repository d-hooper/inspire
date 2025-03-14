import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class TodosController {

  constructor() {
    console.log('✔️ controller');
    AppState.on('identity', this.getTodos)
    AppState.on('identity', this.showTodos)
    AppState.on('identity', this.drawTodoList)
    AppState.on('todos', this.drawTodoList)
    AppState.on('todos', this.drawTodosRemaining)
  }

  drawTodoList() {
    const tasks = AppState.todos
    let tasksContent = ''
    tasks.forEach(task => tasksContent += task.todoItemTemplate)
    const todoListElem = document.getElementById('todoList')
    todoListElem.innerHTML = tasksContent
  }
  
  drawTodosRemaining() {
    const tasks = AppState.todos
    const incompleteTasks = tasks.filter(task => !task.completed)
    const totalNum = incompleteTasks.length
    const numOfTasksRemainingElem = document.getElementById('numOfTasks')
    numOfTasksRemainingElem.innerText = `${totalNum} tasks remaining`
  }

  showTodos() {
    const identity = AppState.identity
    if (identity == null){
      console.log(identity);
      return
    }
    console.log(identity);
    document.getElementById('tasksController').classList.remove('d-none')
  }

  async getTodos() {
    try {
      await todosService.getTodos()
    } catch (error) {
      console.log('COULD NOT GET TODO LIST', error);
      Pop.error(error, 'Could not get To-Do List')
    }
  }
  
  async addTodo() {
    try {
      event.preventDefault()
      const formElem = event.target
      // @ts-ignore
      const descriptionData = getFormData(formElem)
      await todosService.addTodo(descriptionData)
      // @ts-ignore
      formElem.reset()
    } catch (error) {
      console.error('COULD NOT ADD TODO LIST ITEM', error);
      Pop.error(error, 'Could not add To-Do list item')
    }
  }

  async toggleCompleteTodo(taskId) {
    try {
      await todosService.toggleCompleteTodo(taskId)
    } catch (error) {
      console.error('COULD NOT UPDATE TODO LIST ITEM', error);
      Pop.error(error, 'Could not update To-Do list item')
    }
  }
  
  async deleteTodo(taskId) {
    try {
      const confirmed = await Pop.confirm('Are you sure you would like to delete this task?', 'This cannot be undone.', 'Yes', 'No')     
      if (!confirmed) {
        return
      }
      todosService.deleteTodo(taskId)

    } catch (error) {
      console.error('COULD NOT DELETE TODO LIST ITEM', error);
      Pop.error(error, 'Could not delete To-Do list item')
    }
  }
}