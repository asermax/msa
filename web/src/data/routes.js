import {
  INDEX, LOGIN, ORDER_CREATE, ORDER_SUMMARY, ORDER_DETAILS,
  OPERATIVE_DASHBOARD, OPERATIVE_ORDERS, OPERATIVE_PRODUCTS,
} from './route/actions'

export default {
  [INDEX]: '/',
  [LOGIN]: '/login',
  [ORDER_CREATE]: '/orden',
  [ORDER_SUMMARY]: '/orden/enviada',
  [OPERATIVE_DASHBOARD]: '/operativo',
  [OPERATIVE_ORDERS]: '/operativo/ordenes',
  [ORDER_DETAILS]: '/operativo/ordenes/:id',
  [OPERATIVE_PRODUCTS]: '/operativo/productos',
}
