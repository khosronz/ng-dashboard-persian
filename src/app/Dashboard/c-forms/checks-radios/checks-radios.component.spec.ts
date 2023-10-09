import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecksRadiosComponent } from './checks-radios.component';

describe('ChecksRadiosComponent', () => {
  let component: ChecksRadiosComponent;
  let fixture: ComponentFixture<ChecksRadiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChecksRadiosComponent]
    });
    fixture = TestBed.createComponent(ChecksRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
