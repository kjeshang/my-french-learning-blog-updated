import { Component } from '@angular/core';
import { FeatureContainerComponent } from '../../../shared/page-components/feature-container/feature-container.component';
import { IntroductionComponent } from '../introduction/introduction.component';

@Component({
  selector: 'app-about-page',
  imports: [FeatureContainerComponent, IntroductionComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {

}
