import { api } from "../utils/Axios.js"

class TodoService {
  
  
  async getTodos() {
    const response = await api.get('api/todos')
    console.log(response.data); 
  }

}

export const todosService = new TodoService()