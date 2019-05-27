/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasicsComponentCommunicateComponent } from './basics-component-communicate.component';

describe('BasicsComponentCommunicateComponent', () => {
  let component: BasicsComponentCommunicateComponent;
  let fixture: ComponentFixture<BasicsComponentCommunicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicsComponentCommunicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsComponentCommunicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
