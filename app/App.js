import { AuthController } from "./Auth/AuthController.js"
import { ImagesController } from "./controllers/ImagesController.js"
import { QuoteController } from "./controllers/QuotesController.js"
import { TodosController } from "./controllers/TodosController.js"
import { WeatherController } from "./controllers/WeatherController.js"

class App {

authController = new AuthController()

imagesController = new ImagesController()

quotesController = new QuoteController()

todosController = new TodosController()

weatherController = new WeatherController()

}

window['app'] = new App()