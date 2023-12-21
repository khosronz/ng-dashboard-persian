import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRadiosComponent } from './check-radios.component';

describe('CheckRadiosComponent', () => {
  let component: CheckRadiosComponent;
  let fixture: ComponentFixture<CheckRadiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckRadiosComponent]
    });
    fixture = TestBed.createComponent(CheckRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
