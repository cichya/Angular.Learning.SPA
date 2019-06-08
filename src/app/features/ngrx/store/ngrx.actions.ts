import { Data } from './../models/data';
import { Action } from '@ngrx/store';

export const ADD_DATA = '[Ngrx] Add Data';
export const DELETE_DATA = '[Ngrx] Delete Data';

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
  | DeleteData;
