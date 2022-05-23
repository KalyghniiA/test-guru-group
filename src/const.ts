export enum HttpCode {
  BadRequest = 400,
  NotFound = 404,
}

export enum LoadingStatus {
  Idle = 'IDLE',
  Loading = 'LOADING',
  Succeeded = 'SUCCEEDED',
  Failed = 'FAILED',
}

export enum APIRoute {
  apartments = '/products',
}

export enum NameSpase {
  ApartmentsData = 'APARTMENTS_DATA',
  App = 'APP',
}

export enum AppRoute {
  Root = '/',
}

export const QUANTITY_CARDS = 16;

export const STEP_SHOW_CARD = 16;
