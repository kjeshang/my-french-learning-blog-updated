import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BlogPost } from "./models";
import { firstValueFrom } from "rxjs";

@Injectable({providedIn: 'root'})
export class DbService {
    http: HttpClient = inject(HttpClient);

    async getBlogPostData(): Promise<BlogPost[]> {
        const url: string = "https://raw.githubusercontent.com/kjeshang/MyFrenchLearningBlog_Backend/refs/heads/main/data.json";
        const data: BlogPost[] = await firstValueFrom(this.http.get<BlogPost[]>(url));
        return data;
    }

    async getCertificationsData(): Promise<any> {
        
    }
}