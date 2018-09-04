// @flow
export type OrderProducts = {
  [string]: number,
}

export type OrderProduct = {
  product: number,
  amount: number,
}

export type Order = {
  id: number,
  user: string,
  organization: string,
  created: number,
  products: Array<OrderProduct>,
}

export type OrdersById = {
  [string]: Order,
}
