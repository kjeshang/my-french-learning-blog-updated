import { Component, inject } from '@angular/core';
import { FeatureContainerComponent } from "../../../shared/page-components/feature-container/feature-container.component";
import { BlogStore } from '../../../state/store';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-page',
  imports: [FeatureContainerComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent {
  blogStore = inject(BlogStore);
  fb: FormBuilder = inject(FormBuilder);

  blogForm: FormGroup = this.fb.group({
    query: ['']
  });

  onQueryInput() {
    const query: string = this.blogForm.get("query")?.value as string;
    this.blogStore.updateQueryFilter(query);
  }

}
