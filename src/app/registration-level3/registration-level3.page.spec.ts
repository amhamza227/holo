import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationLevel3Page } from './registration-level3.page';

describe('RegistrationLevel3Page', () => {
  let component: RegistrationLevel3Page;
  let fixture: ComponentFixture<RegistrationLevel3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationLevel3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationLevel3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
