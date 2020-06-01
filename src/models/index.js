import { combineReducers } from 'redux'
import * as sagaEffects from 'redux-saga/effects'

const context = require.context('./', false, /\.js$/)
const modules = context.keys().filter(key => key !== './index.js').map(key => context(key))

const reducers = {}
const sagas = []

modules.forEach(value => {
  let module = value.default
  reducers[module.name] = module.reducer
  sagas.push(module.saga)
})

export default {
  rootReducer: combineReducers(reducers),
  rootSaga: function* () {
    yield sagaEffects.all(sagas.map(item => item()))
  }
}
