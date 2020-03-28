import { createStore } from 'redux'
import rootReducer from './reducers'

// @ts-ignore
const store = createStore(rootReducer)

export { store }
