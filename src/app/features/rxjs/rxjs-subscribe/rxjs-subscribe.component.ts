import { RxjsService } from './../../../core/rxjs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-subscribe',
  templateUrl: './rxjs-subscribe.component.html',
  styleUrls: ['./rxjs-subscribe.component.css']
})
export class RxjsSubscribeComponent implements OnInit {
  data: any;

  constructor(private rxjsService: RxjsService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.rxjsService.getDataForSubscribe().subscribe((data: any) => {
      this.data = data;
    });
  }

}
