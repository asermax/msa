// @flow
import * as R from 'ramda'
import wretch from 'wretch'
import cookie from 'js-cookie'

export const PRODUCER_ENTRYPOINT = 'api/entrypoint/producer'
export const PRODUCT_ENTRYPOINT = 'api/entrypoint/product'
export const ORDER_ENTRYPOINT = 'api/entrypoint/order'

const baseWretch = wretch()
  .url(R.defaultTo('', process.env.BASE_URL))
  .url('/api')

const modificationWretch = baseWretch
  .headers({
    'X-CSRFToken': cookie.get('csrftoken'),
  })

const entrypointsMap = {
  [PRODUCER_ENTRYPOINT]: '/producers/',
  [PRODUCT_ENTRYPOINT]: '/products/',
  [ORDER_ENTRYPOINT]: '/orders/',
}

export const apiGet = (entrypoint: string, params: ?{}): {} => R.compose(
  R.invoker(0, 'json'),
  R.invoker(0, 'get'),
  R.when( // only add the query when there are params present
    R.always(
      R.complement(
        R.either(
          R.isNil,
          R.isEmpty,
        ),
      )(params),
    ),
    R.invoker(1, 'query')(params),
  ),
  R.invoker(1, 'url')(entrypointsMap[entrypoint]),
)(baseWretch)

export const apiPost = (entrypoint: string, data: {}): {} => modificationWretch
  .url(entrypointsMap[entrypoint])
  .post(data)
  .json()
