import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotlyLineChartComponent } from './plotly-line-chart.component';

describe('PlotlyLineChartComponent', () => {
  let component: PlotlyLineChartComponent;
  let fixture: ComponentFixture<PlotlyLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlotlyLineChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlotlyLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
