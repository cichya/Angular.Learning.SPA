/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasicsComponentCommunicateChildComponent } from './basics-component-communicate-child.component';

describe('BasicsComponentCommunicateChildComponent', () => {
  let component: BasicsComponentCommunicateChildComponent;
  let fixture: ComponentFixture<BasicsComponentCommunicateChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicsComponentCommunicateChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsComponentCommunicateChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
