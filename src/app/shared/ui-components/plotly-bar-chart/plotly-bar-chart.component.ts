import { Component } from '@angular/core';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

@Component({
  selector: 'app-plotly-bar-chart',
  imports: [PlotlyModule],
  templateUrl: './plotly-bar-chart.component.html',
  styleUrl: './plotly-bar-chart.component.scss'
})
export class PlotlyBarChartComponent {

}
