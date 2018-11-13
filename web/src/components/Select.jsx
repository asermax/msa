import React from 'react'
import { transparentize } from 'polished'
import { colors } from 'styles/util'
import BaseSelect from 'react-select'

const styles = {
  control: (styles, state) => ({
    ...styles,
    height: 38,
    borderWidth: 1,
    borderColor: state.isFocused ? colors.primary : colors.borderGray,
    ':hover': { borderColor: colors.primary },
    boxShadow: 'none',
  }),
  clearIndicator: (styles, state) => ({
    ...styles,
    color: state.isFocused ? colors.primary : colors.borderGray,
    ':hover': { color: colors.primary },
  }),
  dropdownIndicator: (styles, state) => ({
    ...styles,
    color: state.isFocused ? colors.primary : colors.borderGray,
    ':hover': { color: colors.primary },
  }),
  input: (styles) => ({
    ...styles,
    '> *': {
      display: 'flex !important',
      alignItems: 'center',
    },
  }),
  option: (styles, state) => ({
    ...styles,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: state.isFocused ? colors.primary : colors.white,
    color: state.isFocused ? colors.white : colors.primary,
  }),
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: colors.transparent,
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    borderRaidus: 4,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: colors.primary,
    color: colors.white,
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    borderRaidus: 4,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: colors.primary,
    color: colors.white,
    ':hover': {
      backgroundColor: transparentize(0.1, colors.primary),
    },
  }),
}

export const Select = (props) => (
  <BaseSelect {...props} styles={styles} />
)
