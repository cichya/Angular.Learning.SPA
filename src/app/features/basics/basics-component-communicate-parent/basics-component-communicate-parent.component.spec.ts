/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasicsComponentCommunicateParentComponent } from './basics-component-communicate-parent.component';

describe('BasicsComponentCommunicateParentComponent', () => {
  let component: BasicsComponentCommunicateParentComponent;
  let fixture: ComponentFixture<BasicsComponentCommunicateParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicsComponentCommunicateParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsComponentCommunicateParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
