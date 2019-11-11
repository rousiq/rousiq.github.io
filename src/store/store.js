import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import rootReducer from 'reducers'

export default (initialState = {}) => {
  // Middleware Configuration
  const middleware = [thunk, promise]
  // Browser console logger
  if (process.env.NODE_ENV === 'development') {
    middleware.push(createLogger({collapsed: true}))
  }
  // Store Instantiation and HMR Setup
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  )
}
