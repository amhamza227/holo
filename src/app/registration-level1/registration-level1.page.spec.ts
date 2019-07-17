import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationLevel1Page } from './registration-level1.page';

describe('RegistrationLevel1Page', () => {
  let component: RegistrationLevel1Page;
  let fixture: ComponentFixture<RegistrationLevel1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationLevel1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationLevel1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
