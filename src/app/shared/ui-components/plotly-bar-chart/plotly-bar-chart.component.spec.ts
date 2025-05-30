import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotlyBarChartComponent } from './plotly-bar-chart.component';

describe('PlotlyBarChartComponent', () => {
  let component: PlotlyBarChartComponent;
  let fixture: ComponentFixture<PlotlyBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlotlyBarChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlotlyBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
