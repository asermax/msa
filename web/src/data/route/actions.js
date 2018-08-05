import { NOT_FOUND } from 'redux-first-router'
export { NOT_FOUND } from 'redux-first-router'

export const INDEX = 'route/index'
export const allRoutes = [
  NOT_FOUND, INDEX,
]

export const goToIndex = () => ({
  type: INDEX,
})
