/* eslint-env node */
import '@babel/polyfill'
import { renderEmail } from './render'
import { OrderSummary, orderSummarySagas } from './OrderSummary'

const emailsMap = {
  orderSummary: {
    Component: OrderSummary,
    sagas: orderSummarySagas,
  },
}

const emailName = process.argv[2]
const props = JSON.parse(process.argv[3])

const emailModule = emailsMap[emailName]

if (emailModule) {
  const { sagas, Component } = emailModule
  renderEmail(sagas, Component, props)
}
