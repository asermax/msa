// @flow
// data structure
export type Producer = {
  id: string,
  name: string,
  slug: string,
}

// actions
export type FetchProducersRequestAction = {
  +type: 'producers/fetch/request',
}
export type FetchProducersSuccessAction = {
  +type: 'producers/fetch/success',
  +payload: Producer[],
}
export type FetchProducersFailureAction = {
  +type: 'producers/fetch/failure',
  +payload: string,
}

export type Action =
  FetchProducersRequestAction |
  FetchProducersSuccessAction |
  FetchProducersFailureAction

// reducers state
export type ProducersIds = string[]
export type ProducersById = {
  [string]: Producer
}
export type ProducerState = {
  ids: ProducersIds,
  byId: ProducersById,
}
