import { Data } from '../models/data';
import * as NgrxActions from './ngrx.actions';

export interface State {
  data: Data[];
}

const initialState: State = {
  data: [{ id: 1, value: 'Initial value'}]
};

export function ngrxReducer(
  state: State = initialState,
  action: NgrxActions.NgrxActions
) {
  switch (action.type) {
    case NgrxActions.ADD_DATA:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case NgrxActions.DELETE_DATA:
      return {
        ...state,
        data: state.data.filter(x => x.id !== action.index)
      };
    default:
      return state;
  }
}

