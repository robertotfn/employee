/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SediComponent } from './sedi.component';

describe('SediComponent', () => {
  let component: SediComponent;
  let fixture: ComponentFixture<SediComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SediComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
