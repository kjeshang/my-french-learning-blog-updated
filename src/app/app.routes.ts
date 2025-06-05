import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { BlogPageComponent } from './pages/blog/blog-page/blog-page.component';
import { NgModule } from '@angular/core';
import { DataPageComponent } from './pages/data/data-page/data-page.component';
import { AboutPageComponent } from './pages/about/about-page/about-page.component';

export const routes: Routes = [
    {
        path:"", component:HomePageComponent
    },
    {
        path:"blog", component:BlogPageComponent
    },
    {
        path:"about", component:AboutPageComponent
    },
    {
        path:"data", component:DataPageComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes{}
