/* globals process */
import * as R from 'ramda'
import wretch from 'wretch'
import cookie from 'js-cookie'

export const PRODUCER_ENTRYPOINT = 'api/entrypoint/producer'
export const PRODUCT_ENTRYPOINT = 'api/entrypoint/product'
export const ORDER_ENTRYPOINT = 'api/entrypoint/order'
export const SESSION_ENTRYPOINT = 'api/entrypoint/session'

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
  [SESSION_ENTRYPOINT]: '/sessions/',
}

/**
 * @param {string[]?} segments
 * @returns string
 */
const buildSegments = (segments = []) => R.join('/')(segments)

/**
 * @param {string} entrypoint
 * @param {{segments?: string[], params?: object}} options
 * @returns {Promise}
 */
export const apiGet = (entrypoint, options) => {
  let wretch = baseWretch.url(entrypointsMap[entrypoint])

  if (options && options.segments) {
    wretch = wretch.url(buildSegments(options.segments))
  }

  if (options && options.params) {
    wretch = wretch.query(options.params)
  }

  return wretch.get().json()
}

/**
 * @param {string} entrypoint
 * @param {object} data
 * @returns {Promise}
 */
export const apiPost = (entrypoint, data) => modificationWretch
  .url(entrypointsMap[entrypoint])
  .post(data)
  .json()

/**
 * @param {string} entrypoint
 * @param {{segments?: string[], params?: object}} options
 * @returns {Promise}
 */
export const apiDelete = (entrypoint, options) => {
  let wretch = modificationWretch.url(entrypointsMap[entrypoint])

  if (options && options.segments) {
    wretch = wretch.url(buildSegments(options.segments))
  }

  return wretch.delete().res()
}
