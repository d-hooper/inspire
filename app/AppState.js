import { EventEmitter } from './utils/EventEmitter.js'
import { Identity } from './auth/Identity.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Todo } from './models/Todo.js'

class ObservableAppState extends EventEmitter {

  /** @type { Identity } */
  identity = null

  /** @type { Todo[] } */
  todos = []

}

export const AppState = createObservableProxy(new ObservableAppState())