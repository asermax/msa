import { useEffect, useRef } from 'react'

/**
 *  @param {() => void} callback - callback to call on outside click
 *  @returns {import('react').Ref<any>} - ref to be used to indicate the target element
 */
export const useOutsideClick = (callback) => {
  // get a ref for the element we want to control clicks on
  const ref = useRef(null)

  // put together event handler
  const onClick = (e) => {
    if (!ref.current.contains(e.target)) {
      // only call the callback when the click was outside the ref
      callback()
    }
  }

  // setup the listener
  useEffect(() => {
    document.addEventListener('click', onClick)

    return () => document.removeEventListener('click', onClick)
  })

  // return the ref
  return ref
}
