import { Component, inject } from '@angular/core';
import { BlogStore } from '../../../state/blog.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page-content',
  imports: [CommonModule],
  templateUrl: './home-page-content.component.html',
  styleUrl: './home-page-content.component.scss',
})
export class HomePageContentComponent {
  blogStore = inject(BlogStore);
  
}
