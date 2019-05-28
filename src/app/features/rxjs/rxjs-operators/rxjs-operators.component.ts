import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {
  dataMapOp: number[];

  constructor() { }

  ngOnInit() {
    this.mapOperator();
  }

  mapOperator() {
    this.getDataMap().subscribe((data: number[]) => {
      this.dataMapOp = data;
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
}
