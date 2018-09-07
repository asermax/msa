import { INDEX, ORDER_CREATE, ORDER_SUMMARY, ORDERS_LIST } from './route/actions'

export default {
  [INDEX]: '/',
  [ORDER_CREATE]: '/orden',
  [ORDER_SUMMARY]: '/orden/enviada',
  [ORDERS_LIST]: '/orden/lista',
}
