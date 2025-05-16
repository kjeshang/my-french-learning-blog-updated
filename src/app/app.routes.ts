import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { BlogPageComponent } from './pages/blog/blog-page/blog-page.component';

export const routes: Routes = [
    {
        path:"", component:HomePageComponent
    },
    {
        path:"blog", component:BlogPageComponent
    },
];
