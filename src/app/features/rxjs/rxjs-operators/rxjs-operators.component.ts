import { Component, OnInit } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {
  dataMapOp: number[];
  dataFromOp: number;
  dataFromPromiseOp: number[];

  constructor() { }

  ngOnInit() {
    this.mapOperator();
    this.fromOperator();
    this.fromOperatorPromise();
  }

  mapOperator() {
    this.getDataMap().subscribe((data: number[]) => {
      this.dataMapOp = data;
    });
  }

  fromOperator() {
    this.getDataFrom().subscribe((data: number) => {
      this.dataFromOp = data;
    });
  }

  fromOperatorPromise() {
    this.getDataFromPromise().subscribe((data: number[]) => {
      this.dataFromPromiseOp = data;
    });
  }

  getDataMap(): Observable<number[]> {
    const data = [1, 2, 3, 4, 5];

    return of(data).pipe(
      map((numbers: number[]) => {
        const result = [];

        numbers.forEach(x => {
          result.push(x * 2);
        });

        return result;
      })
    );
  }

  getDataFrom(): Observable<number> {
    const data = [1, 2, 3];

    return from(data);
  }

  getDataFromPromise(): Observable<number[]> {
    const data = [1, 2, 3];

    const promises: Promise<number[]> = new Promise(resolve => resolve(data));

    return from(promises);
}
}
