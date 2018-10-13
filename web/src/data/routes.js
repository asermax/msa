import {
  INDEX, ORDER_CREATE, ORDER_SUMMARY, ORDER_DETAILS, OPERATIVE_ORDERS, OPERATIVE_PRODUCTS,
} from './route/actions'

export default {
  [INDEX]: '/',
  [ORDER_CREATE]: '/orden',
  [ORDER_SUMMARY]: '/orden/enviada',
  [ORDER_DETAILS]: '/operativo/ordenes/:id',
  [OPERATIVE_ORDERS]: '/operativo/ordenes',
  [OPERATIVE_PRODUCTS]: '/operativo/productos',
}
