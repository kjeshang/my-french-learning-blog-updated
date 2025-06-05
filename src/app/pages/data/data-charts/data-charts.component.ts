import { Component, inject } from '@angular/core';
import { PlotlyBarChartComponent } from '../../../shared/ui-components/plotly-bar-chart/plotly-bar-chart.component';
import { PlotlyPieChartComponent } from '../../../shared/ui-components/plotly-pie-chart/plotly-pie-chart.component';
import { PlotlyLineChartComponent } from '../../../shared/ui-components/plotly-line-chart/plotly-line-chart.component';
import { BlogStore } from '../../../state/blog.store';

@Component({
  selector: 'app-data-charts',
  imports: [PlotlyBarChartComponent, PlotlyPieChartComponent, PlotlyLineChartComponent],
  templateUrl: './data-charts.component.html',
  styleUrl: './data-charts.component.scss'
})
export class DataChartsComponent {
  blogStore = inject(BlogStore);
}
