export interface BlogPost {
    id: number,
    name: string,
    level: string,
    date: string,
    reference: string,
    post: string
}

export interface Certifications {
    busuu: {
        name: string;
        link: string;
    }[],
    udemy: {
        name: string;
        link: string;
    }[],
}

export interface PlotlyBarChartData {
    x: string[];
    y: number[];
    title: string;
    height: number;
}