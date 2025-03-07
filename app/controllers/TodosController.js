import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { Pop } from "../utils/Pop.js";

export class TodosController {
  
  constructor() {
    console.log('✔️ controller');
    AppState.on('identity', this.getTodos)
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