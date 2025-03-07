import { EventEmitter } from './utils/EventEmitter.js'
import { Identity } from './auth/Identity.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Todo } from './models/Todo.js'
import { Image } from './models/Image.js'
import { Quote } from './models/Quote.js'

class ObservableAppState extends EventEmitter {

  /** @type { Identity } */
  identity = null

  /** @type { Todo[] } */
  todos = []
  
  
  /** @type { Image } */
  activeImage = null
  
  /** @type { Quote } */
  activeQuote = null

}

export const AppState = createObservableProxy(new ObservableAppState())