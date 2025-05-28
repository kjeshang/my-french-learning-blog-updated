import { Component } from '@angular/core';
import { FeatureContainerComponent } from '../../../shared/page-components/feature-container/feature-container.component';
import { CommonModule } from '@angular/common';
import { HomePageContentComponent } from '../home-page-content/home-page-content.component';

@Component({
  selector: 'app-home-page',
  imports: [FeatureContainerComponent, CommonModule, HomePageContentComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  
}
