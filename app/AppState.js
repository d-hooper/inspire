import { EventEmitter } from './utils/EventEmitter.js'
import { Identity } from './auth/Identity.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /** @type { Identity } */
  identity = null

}

export const AppState = createObservableProxy(new ObservableAppState())