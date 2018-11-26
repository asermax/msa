export type Product =  {
  readonly name: string
  readonly price: string
  readonly unit: string
  readonly minAmount: string
}

export type ProductsById = {
  readonly [id: string]: Product
}
