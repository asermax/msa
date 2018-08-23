/* global process */
import * as R from 'ramda'
import { connect } from 'react-redux'
import { compose, branch, renderNothing, setDisplayName, wrapDisplayName } from 'recompose'
import { getCurrentRoute } from 'data/route/selectors'

const mapStateToProps = (state) => ({
  currentRoute: getCurrentRoute(state),
})

export const forRoute = (route) => {
  const hoc = compose(
    connect(mapStateToProps),
    branch(
      R.compose(R.not, R.propEq('currentRoute', route)),
      renderNothing,
    ),
  )

  if (process.env.NODE_ENV !== 'production') {
    return BaseComponent =>
      setDisplayName(
        wrapDisplayName(BaseComponent, 'forRoute'),
      )(hoc(BaseComponent))
  }

  return hoc
}
