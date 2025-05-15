import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { BlogPost } from './models';
import { DbService } from './db.service';
import { Inject, inject } from '@angular/core';

type BlogState = {
  blogData: BlogPost[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialBlogState: BlogState = {
  blogData: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const BlogStore = signalStore(
  { providedIn: 'root' },
  withState(initialBlogState),
  withMethods(
    (
      store,
      db: DbService = inject(DbService)
    ) => ({
      async loadBlogData(): Promise<void> {
        const blogData: BlogPost[] = await db.getBlogPostData();
        patchState(store, (state: BlogState) => ({
          blogData: blogData,
        }));
      }
  })),
);