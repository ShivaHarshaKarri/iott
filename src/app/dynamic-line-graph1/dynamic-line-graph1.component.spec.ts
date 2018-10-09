import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLineGraph1Component } from './dynamic-line-graph1.component';

describe('DynamicLineGraph1Component', () => {
  let component: DynamicLineGraph1Component;
  let fixture: ComponentFixture<DynamicLineGraph1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicLineGraph1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicLineGraph1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
