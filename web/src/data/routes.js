import { INDEX, ORDER_CREATE, ORDER_SUMMARY, ORDER_DETAILS, ORDERS_LIST } from './route/actions'

export default {
  [INDEX]: '/',
  [ORDER_CREATE]: '/orden',
  [ORDER_SUMMARY]: '/orden/enviada',
  [ORDER_DETAILS]: '/orden/lista/:id',
  [ORDERS_LIST]: '/orden/lista',
}
