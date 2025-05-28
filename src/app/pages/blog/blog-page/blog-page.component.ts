import { Component, inject } from '@angular/core';
import { FeatureContainerComponent } from "../../../shared/page-components/feature-container/feature-container.component";
import { BlogStore } from '../../../state/blog.store';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BlogPostComponent } from '../blog-post/blog-post.component';

@Component({
  selector: 'app-blog-page',
  imports: [FeatureContainerComponent, CommonModule, ReactiveFormsModule, BlogPostComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent {
  blogStore = inject(BlogStore);
  fb: FormBuilder = inject(FormBuilder);

  blogForm: FormGroup = this.fb.group({
    query: ['']
  });

  onQueryInput(): void {
    const query: string = this.blogForm.get("query")?.value as string;
    this.blogStore.updateQueryFilter(query);
  }

  onSelectBlogPost(id: number | undefined): void {
    this.blogStore.updateSelectedBlogPost(id);
    console.log(this.blogStore.selectedBlogPost());
  }

}
