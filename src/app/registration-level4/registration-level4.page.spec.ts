import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationLevel4Page } from './registration-level4.page';

describe('RegistrationLevel4Page', () => {
  let component: RegistrationLevel4Page;
  let fixture: ComponentFixture<RegistrationLevel4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationLevel4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationLevel4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
