import { Component, inject } from '@angular/core';
import { BlogStore } from '../../../state/blog.store';

@Component({
  selector: 'app-career',
  imports: [],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent {
  blogStore = inject(BlogStore);
}
