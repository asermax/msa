/* global process */
import * as R from 'ramda'
import { connect } from 'react-redux'
import { compose, branch, renderNothing, setDisplayName, wrapDisplayName } from 'recompose'
import { getCurrentRoute } from 'data/route/selectors'

const mapStateToProps = (state) => ({
  currentRoute: getCurrentRoute(state),
})

export const forRoute = (...routes) => {
  const hoc = compose(
    connect(mapStateToProps),
    branch(
      R.compose(
        R.not,
        R.contains(R.__, routes),
        R.prop('currentRoute'),
      ),
      renderNothing,
    ),
  )

  if (process.env.NODE_ENV !== 'production') {
    return (BaseComponent) =>
      setDisplayName(
        wrapDisplayName(BaseComponent, 'forRoute'),
      )(hoc(BaseComponent))
  }

  return hoc
}
