export type EmptyAction<T extends string> = {
  type: T
}

export type PayloadAction<T extends string, P> = {
  type: T
  payload: P
}
