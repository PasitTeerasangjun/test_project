import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPdpaComponent } from './details-pdpa.component';

describe('DetailsPdpaComponent', () => {
  let component: DetailsPdpaComponent;
  let fixture: ComponentFixture<DetailsPdpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPdpaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPdpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
