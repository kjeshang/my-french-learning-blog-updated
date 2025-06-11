import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BlogStore } from '../../../state/blog.store';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  blogStore = inject(BlogStore);
  router = inject(Router);

  returnToBlogList(): void {
    this.blogStore.updateSelectedBlogPost(undefined);
    console.log(this.blogStore.selectedBlogPost());
    this.router.navigate(['/blog']);
  }
}
