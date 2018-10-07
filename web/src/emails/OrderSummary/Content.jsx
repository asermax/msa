// @flow
import React from 'react'

export type Props = {
  user: string,
}

export const Content = ({ user }: Props) => (
  <div>
    Hello {user}
  </div>
)
