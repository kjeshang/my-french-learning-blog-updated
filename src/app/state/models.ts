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
    x: (string | number)[];
    y: (string | number)[];
    title: string;
    height: number;
    orientation: 'v' | 'h';
    margin?: PlotlyChartMargin
}

export interface PlotlyPieChartData {
    labels: string[];
    values: number[];
    title: string;
}

export interface PlotlyLineChartData {
    x: (string | number)[];
    y: (string | number)[];
    title: string;
    height: number;
    margin?: PlotlyChartMargin;
}

export interface PlotlyChartMargin {
    l: number,
    r: number,
    b: number,
    t: number,
    pad: number,
}