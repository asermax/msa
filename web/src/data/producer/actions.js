// @flow
import type {
  FetchProducersRequestAction, FetchProducersSuccessAction, FetchProducersFailureAction,
} from './types'
export const FETCH_PRODUCERS_REQUEST = 'producers/fetch/request'
export const FETCH_PRODUCERS_SUCCESS = 'producers/fetch/success'
export const FETCH_PRODUCERS_FAILURE = 'producers/fetch/failure'

export const fetchProducers: () => FetchProducersRequestAction = () => ({
  type: FETCH_PRODUCERS_REQUEST,
})

export const fetchProducersSuccess: (*) => FetchProducersSuccessAction = (producers) => ({
  type: FETCH_PRODUCERS_SUCCESS,
  payload: producers,
})

export const fetchProducersFailure: (*) => FetchProducersFailureAction = (reason) => ({
  type: FETCH_PRODUCERS_FAILURE,
  payload: reason,
})
