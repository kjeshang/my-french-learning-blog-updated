import { Component, inject } from '@angular/core';
import { PlotlyBarChartComponent } from '../../../shared/ui-components/plotly-bar-chart/plotly-bar-chart.component';
import { FeatureContainerComponent } from "../../../shared/page-components/feature-container/feature-container.component";
import { BlogStore } from '../../../state/blog.store';

@Component({
  selector: 'app-data-page',
  imports: [PlotlyBarChartComponent, FeatureContainerComponent],
  templateUrl: './data-page.component.html',
  styleUrl: './data-page.component.scss'
})
export class DataPageComponent {
  blogStore = inject(BlogStore);
}
