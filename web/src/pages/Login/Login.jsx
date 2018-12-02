import React from 'react'
import { connect } from 'react-redux'
import { compose, setDisplayName } from 'recompose'
import { forRoute } from 'hocs'
import { env } from 'utils'
import { LOGIN } from 'data/route/actions'
import { createSession } from 'data/user/actions'
import { GoogleLogin } from 'react-google-login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Centered } from 'components/Centered'
import { Button } from 'components/Button'

const mapDispatchToProps = (dispatch) => ({
  login: ({ code }) => dispatch(createSession(code)),
})

const enhancer = compose(
  forRoute(LOGIN),
  connect(null, mapDispatchToProps),
  setDisplayName('Login'),
)

const StyledGoogleLogin = Button.withComponent(GoogleLogin)

export const Login = enhancer(({ login }) => (
  <Centered>
    <StyledGoogleLogin
      clientId={env.GOOGLE_OAUTH_CLIENT_ID}
      scope="openid email profile"
      accessType="offline"
      responseType="code"
      uxMode="popup"
      onSuccess={login}
      outlined
      render={(props) => (
        <button {...props}>
          <FontAwesomeIcon icon={[ 'fab', 'google' ]}/>
          &nbsp;
          Ingresar
        </button>
      )}
    />
  </Centered>
))
