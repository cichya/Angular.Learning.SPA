import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ComponentCommunicationService } from 'src/app/core/component.communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-basics-component-communicate-child',
  templateUrl: './basics-component-communicate-child.component.html',
  styleUrls: ['./basics-component-communicate-child.component.css']
})
export class BasicsComponentCommunicateChildComponent implements OnInit, OnDestroy {
  @Input() inputChildProperty: string;
  @Output() outputChildProperty = new EventEmitter<string>();

  childProperty: string;
  childPropertyRef: string;

  subscribtion: Subscription;
  serviceProperty: string;

  constructor(private service: ComponentCommunicationService) { }

  ngOnInit() {
    this.outputChildProperty.emit('this is property from child component');

    this.subscribtion = this.service.property$.subscribe(data => {
      this.serviceProperty = data;
    });
  }

  prepareChildProperty() {
    this.childProperty = 'Child property for viewchild';
  }

  prepareChildPropertyRef() {
    this.childPropertyRef = 'Child property for ref';
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
