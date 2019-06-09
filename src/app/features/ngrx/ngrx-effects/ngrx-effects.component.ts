import { Subscription, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../store/app.reducer';
import * as NgrxActions from '../store/ngrx.actions';

import { Data } from '../models/data';
import { take, map, switchMap } from 'rxjs/operators';
import { ofType, Actions } from '@ngrx/effects';

@Component({
  selector: 'app-ngrx-effects',
  templateUrl: './ngrx-effects.component.html',
  styleUrls: ['./ngrx-effects.component.css']
})
export class NgrxEffectsComponent implements OnInit {
  private subscription: Subscription;
  data: Data[];

  constructor(private store: Store<fromApp.AppState>, private actions$: Actions) { }

  ngOnInit() {
    this.store.dispatch(new NgrxActions.FetchData());

    this.subscription = this.store.select('ngrx').subscribe(stateData => {
      this.data = stateData.data;
    });
  }
}
