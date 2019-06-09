import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ComponentCommunicationService {
  private property = new Subject<string>();

  property$ = this.property.asObservable();

  setProperty(prop: string) {
    this.property.next(prop);
  }
}
