import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowAccessAppComponent } from './allow-access-app.component';

describe('AllowAccessAppComponent', () => {
  let component: AllowAccessAppComponent;
  let fixture: ComponentFixture<AllowAccessAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllowAccessAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllowAccessAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
