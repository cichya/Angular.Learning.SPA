import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Data } from '../features/ngrx/models/data';

@Injectable()
export class RxjsService {

  getDataForSubscribe(): Observable<any> {
    const data: any  = {
      key: 'key',
      value: 'value'
    };

    return of(data);
  }

  getData(): Observable<Data[]> {
    const res: Data[] = [];

    res.push({ id: 1, value: '1st element' });
    res.push({ id: 2, value: '2th element' });
    res.push({ id: 3, value: '3rd element' });

    return of(res);
  }
}
