// @flow
export type RouteState = {
  pathname: string,
  type: string,
  query: {
    [string]: string,
  },
  search: string,
}
