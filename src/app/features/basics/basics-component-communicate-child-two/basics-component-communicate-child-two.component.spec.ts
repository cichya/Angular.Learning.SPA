/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasicsComponentCommunicateChildTwoComponent } from './basics-component-communicate-child-two.component';

describe('BasicsComponentCommunicateChildTwoComponent', () => {
  let component: BasicsComponentCommunicateChildTwoComponent;
  let fixture: ComponentFixture<BasicsComponentCommunicateChildTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicsComponentCommunicateChildTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsComponentCommunicateChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
