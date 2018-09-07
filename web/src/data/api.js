import wretch from 'wretch'
import cookie from 'js-cookie'

export const PRODUCT_ENTRYPOINT = 'api/entrypoint/product'
export const ORDER_ENTRYPOINT = 'api/entrypoint/order'

const baseWretch = wretch()
  .url('http://localhost/api')

const modificationWretch = baseWretch
  .headers({
    'X-CSRFToken': cookie.get('csrftoken'),
  })

const entrypointsMap = {
  [PRODUCT_ENTRYPOINT]: '/products/',
  [ORDER_ENTRYPOINT]: '/orders/',
}

export const apiGet = (entrypoint) => baseWretch
  .url(entrypointsMap[entrypoint])
  .get()
  .json()

export const apiPost = (entrypoint, data) => modificationWretch
  .url(entrypointsMap[entrypoint])
  .post(data)
  .json()
