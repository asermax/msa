export type OrderProduct = {
  readonly product: string
  readonly amount: string
}

export type Order = {
  readonly id: string
  readonly user: string
  readonly organization: string
  readonly products: ReadonlyArray<OrderProduct>
  readonly created: string
  readonly paid: boolean
}

export type OrderIds = ReadonlyArray<string>
export type OrderList = ReadonlyArray<Order>

export type OrdersById = {
  readonly [id: string]: OrderProduct
}

export type OrderState = {
  readonly ids: OrderIds
  readonly byId: OrdersById
}

