import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySolidGauge1Component } from './activity-solid-gauge1.component';

describe('ActivitySolidGauge1Component', () => {
  let component: ActivitySolidGauge1Component;
  let fixture: ComponentFixture<ActivitySolidGauge1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitySolidGauge1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySolidGauge1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
