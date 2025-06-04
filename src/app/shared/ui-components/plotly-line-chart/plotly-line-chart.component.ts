import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { PlotlyLineChartData } from '../../../state/models';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-plotly-line-chart',
  imports: [PlotlyModule],
  templateUrl: './plotly-line-chart.component.html',
  styleUrl: './plotly-line-chart.component.scss',
})
export class PlotlyLineChartComponent implements OnChanges {
  @Input() inputData!: PlotlyLineChartData;
  
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

  ngOnChanges(changes: SimpleChanges): void {
    if(this.inputData) {
      this.graph.data[0].x = this.inputData.x as never[];
      this.graph.data[0].y = this.inputData.y as never[];
      this.graph.layout.title.text = this.inputData.title;
      this.graph.height = this.inputData.height;
      if(this.inputData.margin) {
        this.graph.layout.margin = this.inputData.margin
      }
    }
  }
}
