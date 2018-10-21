import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { forRoute } from 'hocs'
import { env } from 'utils'
import { LOGIN } from 'data/route/actions'
import { createSession } from 'data/user/actions'
import { GoogleLogin } from 'react-google-login'
import { Centered } from 'components/Centered'

const mapDispatchToProps = (dispatch) => ({
  login: ({ code }) => dispatch(createSession(code)),
})

const enhancer = compose(
  forRoute(LOGIN),
  connect(null, mapDispatchToProps),
  setDisplayName('Login'),
)

export const Login = enhancer(({ login }) => (
  <Centered>
    <GoogleLogin
      clientId={env.GOOGLE_OAUTH_CLIENT_ID}
      scope="openid email profile"
      accessType="offline"
      responseType="code"
      uxMode="popup"
      onSuccess={login}
    >
      Login
    </GoogleLogin>
  </Centered>
))
