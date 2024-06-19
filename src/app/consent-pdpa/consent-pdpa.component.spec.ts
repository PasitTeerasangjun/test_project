import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentPDPAComponent } from './consent-pdpa.component';

describe('ConsentPDPAComponent', () => {
  let component: ConsentPDPAComponent;
  let fixture: ComponentFixture<ConsentPDPAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsentPDPAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsentPDPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
