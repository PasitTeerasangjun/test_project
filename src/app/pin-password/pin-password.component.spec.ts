import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinPasswordComponent } from './pin-password.component';

describe('PinPasswordComponent', () => {
  let component: PinPasswordComponent;
  let fixture: ComponentFixture<PinPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
