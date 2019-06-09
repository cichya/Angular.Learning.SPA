import { Data } from './../models/data';
import { Action } from '@ngrx/store';

export const FETCH_DATA = '[Ngrx] Fetch Data';
export const SET_DATA = '[Ngrx] Set Data';
export const ADD_DATA = '[Ngrx] Add Data';
export const DELETE_DATA = '[Ngrx] Delete Data';

export class FetchData implements Action {
  readonly type = FETCH_DATA;
}

export class SetData implements Action {
  readonly type = SET_DATA;

  constructor(public payload: Data[]) {}
}

export class AddData implements Action {
  readonly type = ADD_DATA;

  constructor(public payload: Data) {}
}

export class DeleteData implements Action {
  readonly type = DELETE_DATA;

  constructor(public index: number) {}
}

export type NgrxActions =
  | AddData
  | DeleteData
  | FetchData
  | SetData;
