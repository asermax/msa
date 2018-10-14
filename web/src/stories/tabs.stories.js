/* globals module */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { TabContainer, Tab } from 'components/Tabs'

storiesOf('Tabs', module)
  .add('3 tabs', () => (
    <TabContainer>
      <Tab active >Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </TabContainer>
  ))
