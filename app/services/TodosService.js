import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { api } from "../utils/Axios.js"

class TodoService {
async toggleCompleteTodo(taskId) {
    await console.log('service toggling task with id: ', taskId);
  }


  async getTodos() {
    const response = await api.get('api/todos')
    const newTasks = response.data.map(task => new Todo(task))
    AppState.todos = newTasks
    console.log('Tasks', AppState.todos);
  }

}

export const todosService = new TodoService()