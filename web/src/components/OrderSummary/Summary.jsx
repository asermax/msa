import React from 'react'
import { Paper } from 'components/Paper'
import { Separator } from 'components/Separator'
import * as styles from './styles'

export const Summary = (({ children, css, ...props }) => (
  <Paper css={[ styles.receipt, css ]} {...props}>
    <Separator css={styles.separator} />
    {children}
  </Paper>
))
