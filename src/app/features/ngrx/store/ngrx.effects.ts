import { RxjsService } from './../../../core/rxjs.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../store/app.reducer';
import * as ngrxActions from './ngrx.actions';
import { switchMap, map } from 'rxjs/operators';
import { Data } from '../models/data';
import { of } from 'rxjs';

@Injectable()
export class NgrxEffects {
  @Effect()
  fetchData = this.actions$.pipe(
    ofType(ngrxActions.FETCH_DATA),
    switchMap(() => {
      // http
      return this.rxjsService.getData();
    }),
    map(data => {
      return data.map(x => {
        return {
          ...x
        };
      });
    }),
    map(data => {
      return new ngrxActions.SetData(data);
    })
  );

  constructor(
    private actions$: Actions,
    private rxjsService: RxjsService
  ) {}
}
