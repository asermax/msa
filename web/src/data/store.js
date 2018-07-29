/* globals module, window */
import * as R from 'ramda'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { connectRoutes } from 'redux-first-router'
import routes from './routes'
import appReducers from './reducers'
import { rootSaga, rootInitSaga } from './sagas'

function generateReducer(routerReducer) {
  return combineReducers(
    R.merge(appReducers)({
      location: routerReducer,
    }),
  )
}

export function configureStore(history, initialState = {}) {
  // initialize middlewares
  const router = connectRoutes(history, routes)
  const sagaMiddleware = createSagaMiddleware()

  // create store
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    generateReducer(router.reducer),
    initialState,
    composeEnhancers(
      router.enhancer,
      applyMiddleware(
        sagaMiddleware,
        router.middleware,
      ),
    ),
  )

  // run sagas
  let currentSagas = sagaMiddleware.run(rootSaga)

  // run init sagas (doesn't get hot-reloaded)
  sagaMiddleware.run(rootInitSaga)

  // hot reload
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(generateReducer(router.reducer))
    })

    module.hot.accept('./sagas', async() => {
      currentSagas.cancel()
      await currentSagas.done
      currentSagas = sagaMiddleware.run(rootSaga)
    })
  }

  return store
}
