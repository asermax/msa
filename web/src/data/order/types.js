// @flow
export type Product = {
  id: number,
  name: string,
  price: number,
  unit: string,
  minAmount: number,
}

export type ProductsById = {
  [string]: Product,
}

export type OrderProductAmount = number

export type OrderProducts = {
  [string]: OrderProductAmount,
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
