import { Component, inject } from '@angular/core';
import { FeatureContainerComponent } from "../../../shared/page-components/feature-container/feature-container.component";
import { BlogStore } from '../../../state/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-page',
  imports: [FeatureContainerComponent, CommonModule],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent {
  blogStore = inject(BlogStore);
}
