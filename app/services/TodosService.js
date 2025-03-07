import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { api } from "../utils/Axios.js"

class TodoService {
  
  
  async getTodos() {
    const response = await api.get('api/todos')
    const newTasks = response.data.map(task => new Todo(task))
    AppState.todos = newTasks
    console.log('Tasks', AppState.todos);
  }
  
  async addTodo(descriptionData) {
    const response = await api.post('api/todos', descriptionData)
    const newTask = new Todo(response.data)
    AppState.todos.push(newTask)
  }
  
  async toggleCompleteTodo(taskId) {
    const foundTask = AppState.todos.find(todo => todo.id == taskId)
    foundTask.completed = !foundTask.completed
    const response = await api.put(`api/todos/${taskId}`, foundTask)
    AppState.emit('todos')
  }
  
  async deleteTodo(taskId) {
  const foundTaskIndex = AppState.todos.findIndex(todo => todo.id == taskId)
  const response = await api.delete(`api/todos/${taskId}`)
  AppState.todos.splice(foundTaskIndex, 1)
  }
}

export const todosService = new TodoService()