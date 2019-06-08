import { AddData, DeleteData } from './../store/ngrx.actions';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import * as fromApp from '../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Data } from '../models/data';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeLast, map } from 'rxjs/operators';

@Component({
  selector: 'app-ngrx-redux',
  templateUrl: './ngrx-redux.component.html',
  styleUrls: ['./ngrx-redux.component.css']
})
export class NgrxReduxComponent implements OnInit {

  subscription: Subscription;
  data: Data[];
  inputForm: FormGroup;

  constructor(private store: Store<fromApp.AppState>, private fb: FormBuilder) { }

  ngOnInit() {
    // from app.reducer AppState
    this.subscription = this.store.select('ngrx').subscribe(stateData => {
      this.data = stateData.data;
    });
    this.prepareInputForm();
  }

  prepareInputForm() {
    this.inputForm = this.fb.group({
      value: ['']
    });
  }

  submit() {
    const val: string = this.inputForm.get('value').value;

    const id: number = this.data.length > 0 ? this.data.length : 0;

    this.store.dispatch(new AddData({ id: id + 1, value: val }));
  }

  remove(item: Data) {
    this.store.dispatch(new DeleteData(item.id));
  }
}
