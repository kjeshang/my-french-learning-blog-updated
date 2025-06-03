import { Injectable } from "@angular/core";
import { BlogPost, PlotlyBarChartData } from "./models";
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
    getReferenceBarChartData(blogData: BlogPost[], title: string, height: number, orientation: 'v' | 'h', uniqueReference: string[]) {
        let finalData: {reference: string, count: number}[] = [];
        for(let i=0; i < uniqueReference.length; i++) {
            const item: string = uniqueReference[i];
            const result: {reference: string, count: number} = {
                reference: item,
                count: blogData.filter((el: BlogPost) => el.reference.includes(item)).length
            };
            finalData.push(result);
        }
        finalData = chain(finalData).sortBy(['count','reference']).reverse().value();
        

        const chartData: PlotlyBarChartData = {
            x:finalData.map((item: {reference: string, count:number}) => item.count),
            y:finalData.map((item: {reference: string, count:number}) => item.reference),
            title: title,
            height: height,
            orientation: orientation,
        };
        return chartData;
    }
}