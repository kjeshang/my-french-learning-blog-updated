import { Component, Input } from '@angular/core';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-plotly-line-chart',
  imports: [PlotlyModule],
  templateUrl: './plotly-line-chart.component.html',
  styleUrl: './plotly-line-chart.component.scss',
})
export class PlotlyLineChartComponent {

  public graph = {
    data: [
      {
        x: [],
        y: [],
        type: 'scatter',
        mode: 'lines+markers'
      },
    ],
    height: 0,
    layout: {
      title: { text: '' },
      xaxis: {
        visible: true,
        tickfont: {
          size: 10,
        },
      },
      yaxis: { visible: true },
      margin: {
        l: 50,
        r: 50,
        b: 50,
        t: 50,
        pad: 10,
      },
      autosize: true,
      automargin: false,
    },
    config: {
      displayModeBar: false,
      responsive: true,
    },
  };
}
