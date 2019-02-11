/* globals module, window */
import * as R from 'ramda'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { connectRoutes } from 'redux-first-router'
import queryString from 'query-string'
import routes from './routes'
import appReducers from './reducers'
import { queryParametersMiddleware } from './middlewares'
import { rootSaga, rootInitSaga } from './sagas'

function generateReducer(routerReducer) {
  return combineReducers(
    R.merge(appReducers)({
      route: routerReducer,
    }),
  )
}

export function configureStore(initialState = {}) {
  // initialize middlewares
  const router = connectRoutes(routes, {
    location: 'route',
    querySerializer: queryString,
  })
  const sagaMiddleware = createSagaMiddleware()

  // create store
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    generateReducer(router.reducer),
    initialState,
    composeEnhancers(
      router.enhancer,
      applyMiddleware(
        queryParametersMiddleware,
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
      await currentSagas.toPromise()
      currentSagas = sagaMiddleware.run(rootSaga)
    })
  }

  return store
}
