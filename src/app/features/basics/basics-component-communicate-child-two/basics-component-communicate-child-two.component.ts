import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComponentCommunicationService } from 'src/app/core/component.communication.service';

@Component({
  selector: 'app-basics-component-communicate-child-two',
  templateUrl: './basics-component-communicate-child-two.component.html',
  styleUrls: ['./basics-component-communicate-child-two.component.css']
})
export class BasicsComponentCommunicateChildTwoComponent implements OnInit {
  constructor(private service: ComponentCommunicationService) { }

  ngOnInit() {
  }

  setProperty() {
    this.service.setProperty(Math.random().toString());
  }
}
