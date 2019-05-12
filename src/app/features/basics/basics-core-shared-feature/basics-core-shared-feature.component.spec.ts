/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasicsCoreSharedFeatureComponent } from './basics-core-shared-feature.component';

describe('BasicsCoreSharedFeatureComponent', () => {
  let component: BasicsCoreSharedFeatureComponent;
  let fixture: ComponentFixture<BasicsCoreSharedFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicsCoreSharedFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsCoreSharedFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
