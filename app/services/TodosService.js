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

  async toggleCompleteTodo(taskId) {
    const foundTask = AppState.todos.find(todo => todo.id == taskId)
    foundTask.completed = !foundTask.completed
    const response = await api.put(`api/todos/${taskId}`, foundTask)
    AppState.emit('todos')
  }
}

export const todosService = new TodoService()