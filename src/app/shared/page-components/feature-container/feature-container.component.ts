import { Component } from '@angular/core';
import { NavBarComponent } from '../../ui-components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../ui-components/footer/footer.component';

@Component({
  selector: 'app-feature-container',
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './feature-container.component.html',
  styleUrl: './feature-container.component.scss'
})
export class FeatureContainerComponent {

}
