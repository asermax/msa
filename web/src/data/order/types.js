// @flow
export type OrderProducts = {
  [string]: number,
}

export type OrderProduct = {
  product: string,
  amount: number,
}

export type Order = {
  id: string,
  user: string,
  organization: string,
  created: number,
  products: Array<OrderProduct>,
}

// state
export type OrdersIds = string[]
export type OrdersById = {
  [string]: Order,
}

export type OrderState = {
  ids: OrdersIds,
  byId: OrdersById,
  products: OrderProducts,
}
