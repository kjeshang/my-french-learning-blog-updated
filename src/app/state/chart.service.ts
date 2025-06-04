import { Injectable } from "@angular/core";
import { BlogPost, PlotlyBarChartData, PlotlyChartMargin, PlotlyLineChartData, PlotlyPieChartData } from "./models";
import { chain, uniq } from "lodash";

@Injectable({ providedIn:'root' })
export class BlogChartService {
    /**
     * Create bar chart data to view distribution of blog posts by french level.
     */
    getLevelBarChart(blogData: BlogPost[], title: string, height: number, orientation: 'v' | 'h'): PlotlyBarChartData {
        const data: {level: string, count: number}[] = chain(blogData)
            .groupBy((item: BlogPost) => `${item.level}`)
            .map((items: BlogPost[]) => {
                const {level} = items[0];
                const count: number = items.length;
                const result: {level: string, count:number} = {level, count};
                return result;
            })
            .sortBy(['count','skill'])
            .reverse()
            .value();
        
        const chartData: PlotlyBarChartData = {
            x:data.map((item: {level: string, count:number}) => item.level),
            y:data.map((item: {level: string, count:number}) => item.count),
            title: title,
            height: height,
            orientation: orientation,
        };  
        return chartData;
    }

    /**
     * Create bar chart data to view distribution of blog posts by reference (i.e., source).
     */
    getReferenceBarChartData(blogData: BlogPost[], title: string, height: number, orientation: 'v' | 'h', uniqueReference: string[], margin?: PlotlyChartMargin) {
        let data: {reference: string, count: number}[] = [];
        for(let i=0; i < uniqueReference.length; i++) {
            const item: string = uniqueReference[i];
            const result: {reference: string, count: number} = {
                reference: item,
                count: blogData.filter((el: BlogPost) => el.reference.includes(item)).length
            };
            data.push(result);
        }
        data = chain(data).sortBy(['count','reference']).reverse().value();
        
        if(orientation === 'h') {
            const chartData: PlotlyBarChartData = {
                x:data.map((item: {reference: string, count:number}) => item.count),
                y:data.map((item: {reference: string, count:number}) => item.reference),
                title: title,
                height: height,
                orientation: orientation,
                margin: margin,
            };
            return chartData;
        }
        else {
            const chartData: PlotlyBarChartData = {
                x:data.map((item: {reference: string, count:number}) => item.reference),
                y:data.map((item: {reference: string, count:number}) => item.count),
                title: title,
                height: height,
                orientation: orientation,
                margin: margin,
            };
            return chartData;
        }
    }
    
    /**
     * Create pie chart data to view proportion of blog posts by reference (i.e., source).
     */
    getReferencePieChartData(blogData: BlogPost[], title: string, uniqueReference: {reference: string, label: string}[]) {
        let data: {reference: string, count: number, label: string}[] = [];
        for(let i=0; i < uniqueReference.length; i++) {
            const item = uniqueReference[i];
            const result: {reference: string, count: number, label: string} = {
                reference: item.reference,
                count: blogData.filter((el: BlogPost) => el.reference.includes(item.reference)).length,
                label: item.label,
            };
            data.push(result);
        }
        data = chain(data).sortBy(['count','reference']).reverse().value();

        const chartData: PlotlyPieChartData = {
            labels: data.map(item => item.label),
            values: data.map(item => item.count),
            title: title
        }
        return chartData;
    }

    /**
     * Create line chart data to show frequency of posts over a period of time.
     */
    getBlogPostLineChartData(blogData: BlogPost[], title: string, height: number): PlotlyLineChartData {
        const data: {date: string, count: number}[] = chain(blogData)
            .groupBy((item: BlogPost) => `${item.date}`)
            .map((items: BlogPost[]) => {
                const {date} = items[0];
                const count: number = items.length;
                const result: {date: string, count:number} = {date, count};
                return result;
            })
            .sortBy(['date','skill'])
            .reverse()
            .value();
        
        const chartData: PlotlyLineChartData = {
            x:data.map((item: {date: string, count:number}) => item.date),
            y:data.map((item: {date: string, count:number}) => item.count),
            title: title,
            height: height,
        };

        return chartData;
    }
}