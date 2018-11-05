import { useState } from 'react'

/**
 * @param {boolean} initialState - state of the toggle on start
 * @returns {[boolean, (boolean?) => void]} - pair of current state and function to toggle state
 */
export const useToggle = (initialState = false) => {
  const [ state, setState ] = useState(initialState)
  const toggleState = (newState = !state) => setState(newState)

  return [ state, toggleState ]
}
