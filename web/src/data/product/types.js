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

