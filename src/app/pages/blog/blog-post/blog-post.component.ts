import { Component, inject } from '@angular/core';
import { BlogStore } from '../../../state/blog.store';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-blog-post',
  imports: [CommonModule, MarkdownModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {
  blogStore = inject(BlogStore);
}
