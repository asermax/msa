import wretch from 'wretch'

export const PRODUCT_ENTRYPOINT = 'entrypoint/product'

const baseWretch = wretch()
  .url('http://localhost/api')

const entrypointsMap = {
  [PRODUCT_ENTRYPOINT]: '/products/',
}

export const apiGet = (entrypoint) => baseWretch
  .url(entrypointsMap[entrypoint])
  .get()
  .json()
