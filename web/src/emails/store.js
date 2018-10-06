import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import appReducers from 'data/reducers'
import { rootSaga } from 'data/sagas'

export function configureStore(initialState = {}) {
  // initialize middlewares
  const sagaMiddleware = createSagaMiddleware()

  // create store
  const store = createStore(
    combineReducers(appReducers),
    initialState,
    applyMiddleware(
      sagaMiddleware,
    ),
  )

  // run sagas
  sagaMiddleware.run(rootSaga)

  // add the runSaga function to make it accessible to the outside world
  store.runSaga = sagaMiddleware.run

  return store
}
