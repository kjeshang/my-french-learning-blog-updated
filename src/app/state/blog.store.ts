import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { BlogPost } from './models';
import { DbService } from './db.service';
import { computed, inject } from '@angular/core';

type BlogState = {
  blogData: BlogPost[];
  query: string;
};

const initialBlogState: BlogState = {
  blogData: [],
  query: ''
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
      },
      async updateQueryFilter(query: string): Promise<void> {
        patchState(store, (state: BlogState) => ({
            query: query
        }))
      }
  })),
  withComputed((
    {
      blogData,
      query,
    }
  ) => ({
    filteredBlogData: computed(() => {
      const data: BlogPost[] = blogData().filter((el: BlogPost) => 
        el.name.toLowerCase().includes(query().toLowerCase()) ||
        el.level.toLowerCase().includes(query().toLowerCase()) ||
        el.reference.toLowerCase().includes(query().toLowerCase())
      );
      return data;
    })
  })),
);