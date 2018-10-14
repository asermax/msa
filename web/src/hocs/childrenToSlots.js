/* global process */
import { Children } from 'react'
import * as R from 'ramda'
import { compose, mapProps, setDisplayName, wrapDisplayName } from 'recompose'

export const childrenToSlots = (slots) => {
  const hoc = compose(
    mapProps(({ children, ...props }) => {
      return R.compose(
        R.merge(props),
        R.objOf('slots'),
        R.fromPairs,
        R.zip(slots), // zip them in order with slots
        R.partialRight(Children.map, [ R.identity ]), // return immediate children
      )(children)
    }),
  )

  if (process.env.NODE_ENV !== 'production') {
    return (BaseComponent) =>
      setDisplayName(
        wrapDisplayName(BaseComponent, 'childrenToSlots'),
      )(hoc(BaseComponent))
  }

  return hoc
}
