import React from 'react'
import { compose, setDisplayName } from 'recompose'
import { childrenToSlots } from 'hocs'
import { Paper } from 'components/Paper'
import { Separator } from 'components/Separator'
import * as styles from './styles'

const enhancer = compose(
  childrenToSlots([ 'title', 'products', 'total' ]),
  setDisplayName('Summary'),
)

export const Summary = enhancer((({ slots, className, ...props }) => (
  <Paper className={`${styles.receipt} ${className}`} {...props}>
    {slots.title}
    {slots.products}
    <Separator />
    {slots.total}
  </Paper>
)))
