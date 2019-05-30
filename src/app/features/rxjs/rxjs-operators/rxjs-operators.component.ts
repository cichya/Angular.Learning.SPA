import { Component, OnInit } from '@angular/core';
import { of, Observable, from, fromEvent, timer, combineLatest, concat, interval, merge } from 'rxjs';
import { map, mapTo, startWith, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {
  dataMapOp: number[];
  dataFromOp: number;
  dataFromPromiseOp: number[];
  dataFromEventCounter = 0;

  timerOne$: Observable<number> = timer(1000, 4000);
  timerTwo$: Observable<number> = timer(2000, 4000);
  timerThree$: Observable<number> = timer(13000, 4000);

  timerOne: number;
  timerTwo: number;
  timerThree: number;

  dataConcatOp: number;

  firstInterval$: Observable<number>;
  secontInterval$: Observable<number>;
  thirdnterval$: Observable<number>;
  fourthInterval$: Observable<number>;

  mergeDataOp: number;
  startWithDataOp: number;

  firstLatestFromInterval$: Observable<number>;
  secondLatestFromInterval$: Observable<number>;

  withLatestFromOp: string;

  constructor() { }

  ngOnInit() {
    this.mapOperator();
    this.fromOperator();
    this.fromOperatorPromise();
    this.fromEventOperator();
    this.combineLatest();
    this.concatOp();

    this.firstInterval$ = interval(2500);
    this.secontInterval$ = interval(2000);
    this.thirdnterval$ = interval(1500);
    this.fourthInterval$ = interval(1000);
    this.mergeOp();

    this.startWithOp();

    this.firstLatestFromInterval$ = interval(5000);
    this.secondLatestFromInterval$ = interval(1000);
    this.fromWithLatestFromOp();
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

  fromEventOperator() {
    this.getDataFromEvent().subscribe((e: Event) => {
      this.dataFromEventCounter += 1;
    });
  }

  combineLatest() {
    this.getDataFromCombineLatest()
      .subscribe(([timerValOne, timerValTwo, timerValThree]) => {
        this.timerOne = timerValOne;
        this.timerTwo = timerValTwo;
        this.timerThree = timerValThree;
      });
  }

  concatOp() {
    concat(
      of(1, 2, 3),
      of(4, 5, 6),
      of(7, 8, 9))
      .subscribe((data: number) => {
        this.dataConcatOp = data;
      });
  }

  mergeOp() {
    this.getDataFromMerge().subscribe((data: number) => {
      this.mergeDataOp = data;
    });
  }

  startWithOp() {
    this.getDataFromStartWith().subscribe((data: number) => {
      this.startWithDataOp = data;
    });
  }

  fromWithLatestFromOp() {
    this.getDataFromWithLatestFrom().subscribe((data: string) => {
      this.withLatestFromOp = data;
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

  getDataFromEvent(): Observable<Event> {
    return fromEvent(document, 'click');
  }

  getDataFromCombineLatest(): Observable<[number, number, number]> {
    return combineLatest(this.timerOne$, this.timerTwo$, this.timerThree$);
  }

  getDataFromMerge(): Observable<number> {
    return merge(
      this.firstInterval$.pipe(mapTo(1)),
      this.secontInterval$.pipe(mapTo(2)),
      this.thirdnterval$.pipe(mapTo(3)),
      this.fourthInterval$.pipe(mapTo(4)));
  }

  getDataFromStartWith(): Observable<number> {
    return of(1, 2, 3).pipe(startWith(0));
  }

  getDataFromWithLatestFrom(): Observable<string> {
    return this.firstLatestFromInterval$.pipe(
      withLatestFrom(this.secondLatestFromInterval$),
      map(([first, second]) => {
        return `First source (5s): ${first} Second (1s): ${second}`;
      })
    );
  }
}
