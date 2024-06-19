import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyChannelComponent } from './verify-channel.component';

describe('VerifyChannelComponent', () => {
  let component: VerifyChannelComponent;
  let fixture: ComponentFixture<VerifyChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyChannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
