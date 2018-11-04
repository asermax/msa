import * as R from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useToggle, useOutsideClick } from 'hooks'
import * as styles from './styles'

export const ModalActions = ({ actions }) => {
  const [ open, toggle ] = useToggle()
  const ref = useOutsideClick(R.partial(toggle, [ false ]))
  const callAction = (action) => () => {
    toggle(false)
    action()
  }

  return (
    <div
      css={styles.actionsContainer}
      ref={ref}
    >
      <div
        css={styles.actionsButton}
        onClick={() => toggle()}
      >
        <FontAwesomeIcon
          icon="ellipsis-v"
          size="lg"
        />
      </div>
      {open ? (
        <li css={styles.actionsList}>
          {actions.map(({ name, action }) => (
            <ul
              css={styles.actionItem}
              key={name}
              onClick={callAction(action)}
            >
              {name}
            </ul>
          ))}
        </li>
      ) : null}
    </div>
  )
}

ModalActions.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  })).isRequired,
}
