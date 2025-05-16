import { BlogPost } from "../../state/models";

export interface BlogPostView extends BlogPost {
    formattedDate: string;
    millisecondsDate: number;
}