export interface BaseResponse<T> {
  data: T;
}

export interface BaseReduxSlice<T> {
  loading: boolean;
  error: unknown;
  data: T;
}
