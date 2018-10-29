export type OrderProduct = {
  readonly product: string,
  readonly amount: string,
}

export type Order = {
  readonly id: string,
  readonly user: string,
  readonly organization: string,
  readonly products: ReadonlyArray<OrderProduct>,
  readonly created: string,
}

export type OrdersById = {
  readonly [id: string]: OrderProduct,
}

export type OrderState = {
  readonly ids: ReadonlyArray<string>,
  readnoly byId: OrdersById,
}
