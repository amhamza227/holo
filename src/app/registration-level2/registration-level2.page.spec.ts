import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationLevel2Page } from './registration-level2.page';

describe('RegistrationLevel2Page', () => {
  let component: RegistrationLevel2Page;
  let fixture: ComponentFixture<RegistrationLevel2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationLevel2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationLevel2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
