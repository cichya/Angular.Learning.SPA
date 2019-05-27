// tslint:disable-next-line:max-line-length
import { BasicsComponentCommunicateChildComponent } from './../basics-component-communicate-child/basics-component-communicate-child.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-basics-component-communicate-parent',
  templateUrl: './basics-component-communicate-parent.component.html',
  styleUrls: ['./basics-component-communicate-parent.component.css']
})
export class BasicsComponentCommunicateParentComponent implements OnInit {
  propertyForChildComponent: string;
  propertyFromChildComponent: string;
  propertyFromChildComponentViewChild: string;

  @ViewChild(BasicsComponentCommunicateChildComponent) private childComponent: BasicsComponentCommunicateChildComponent;

  constructor() { }

  ngOnInit() {
    this.propertyForChildComponent = 'this is value from parent';
    this.childComponent.prepareChildProperty();
    this.propertyFromChildComponentViewChild = this.childComponent.childProperty;
  }

  fromChildPropertyChange(event) {
    this.propertyFromChildComponent = event;
  }

}
