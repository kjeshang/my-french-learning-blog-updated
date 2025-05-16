import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { BlogPost } from './models';
import { DbService } from './db.service';
import { computed, inject } from '@angular/core';
import { BlogPostView } from '../pages/blog/view-models';
import { chain } from 'lodash';
import { DateTime } from "luxon";

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
      const data: BlogPostView[] = chain(blogData())
      .filter((el: BlogPost) => 
          el.name.toLowerCase().includes(query().toLowerCase()) ||
          el.level.toLowerCase().includes(query().toLowerCase()) ||
          el.reference.toLowerCase().includes(query().toLowerCase())
      )
      .map((el: BlogPost) => {
        const splitDate: string[] = el.date.split("-");
        const datetimeObject: DateTime = DateTime.fromObject({year: +splitDate[0], month: +splitDate[1], day: +splitDate[2] });
        return {
          ...el,
          formattedDate: datetimeObject.toLocaleString(DateTime.DATE_MED),
          millisecondsDate: datetimeObject.toMillis()
        }
      })
      .sortBy(['millisecondsDate'],['desc'])
      .value();
      return data;
    })
  })),
);