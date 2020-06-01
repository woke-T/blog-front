import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import model from './models'
import App from './App'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(model.rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(model.rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

