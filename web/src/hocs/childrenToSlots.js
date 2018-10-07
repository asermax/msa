/* global process */
import { Children } from 'react'
import * as R from 'ramda'
import { compose, mapProps, setDisplayName, wrapDisplayName } from 'recompose'

export const childrenToSlots = (slots) => {
  const hoc = compose(
    mapProps(({ children, ...props }) => {
      const childrenArray = Children.toArray(children)

      return R.compose(
        (slots) => Object.assign(props, { slots }),
        R.fromPairs,
        R.map((slot) => ([
          slot,
          R.find(R.compose(R.propEq('slot', slot), R.prop('props')))(childrenArray),
        ])),
      )(slots)
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
