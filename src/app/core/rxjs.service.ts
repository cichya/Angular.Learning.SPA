import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class RxjsService {

  getDataForSubscribe(): Observable<any> {
    const data: any  = {
      key: 'key',
      value: 'value'
    };

    return of(data);
  }
}
