import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogStore } from './state/blog.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'my-french-learning-blog-updated';
  blogStore = inject(BlogStore);

  ngOnInit(): void {
    this.loadData().then(() => console.log("Data Loaded!"));
  }

  async loadData(): Promise<void> {
    this.blogStore.loadBlogData();
    this.blogStore.loadCertificationsData();
  }
}
