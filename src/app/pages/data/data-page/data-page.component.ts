import { Component, inject } from '@angular/core';
import { FeatureContainerComponent } from "../../../shared/page-components/feature-container/feature-container.component";
import { BlogStore } from '../../../state/blog.store';
import { DataChartsComponent } from '../data-charts/data-charts.component';

@Component({
  selector: 'app-data-page',
  imports: [DataChartsComponent, FeatureContainerComponent],
  templateUrl: './data-page.component.html',
  styleUrl: './data-page.component.scss'
})
export class DataPageComponent {
  blogStore = inject(BlogStore);
}
