import { Component, inject, OnInit } from '@angular/core';
import { BlogStore } from '../../../state/blog.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  imports: [CommonModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {
  blogStore = inject(BlogStore);
}
