import { ActionReducerMap } from '@ngrx/store';
import * as fromNgrx from '../features/ngrx/store/ngrx.reducer';

export interface AppState {
  ngrx: fromNgrx.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  ngrx: fromNgrx.ngrxReducer
};
