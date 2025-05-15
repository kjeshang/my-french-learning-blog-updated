import { Component } from '@angular/core';
import { FeatureContainerComponent } from '../../../shared/page-components/feature-container/feature-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [FeatureContainerComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  
}
