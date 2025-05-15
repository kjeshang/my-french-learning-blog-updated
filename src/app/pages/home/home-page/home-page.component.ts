import { Component, inject } from '@angular/core';
import { FeatureContainerComponent } from '../../../shared/page-components/feature-container/feature-container.component';
import { DbService } from '../../../state/db.service';
import { CommonModule } from '@angular/common';
import { BlogStore } from '../../../state/store';

@Component({
  selector: 'app-home-page',
  imports: [FeatureContainerComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  blogStore =inject(BlogStore);
}
