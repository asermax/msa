// @flow

export type Product = {
  id: string,
  name: string,
  price: number,
  unit: string,
  minAmount: number,
}

export type ProductsIds = [string]
export type ProductsById = {
  [string]: Product,
}

