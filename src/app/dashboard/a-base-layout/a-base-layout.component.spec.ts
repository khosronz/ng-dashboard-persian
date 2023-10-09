import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABaseLayoutComponent } from './a-base-layout.component';

describe('ABaseLayoutComponent', () => {
  let component: ABaseLayoutComponent;
  let fixture: ComponentFixture<ABaseLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ABaseLayoutComponent]
    });
    fixture = TestBed.createComponent(ABaseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
