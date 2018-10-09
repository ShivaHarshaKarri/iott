import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidGauge1Component } from './solidGauge1.component';

describe('SolidGaugeComponent', () => {
  let component: SolidGauge1Component;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolidGauge1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidGauge1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
