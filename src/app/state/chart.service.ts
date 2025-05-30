import { Injectable } from "@angular/core";
import { BlogPost, PlotlyBarChartData } from "./models";
import { chain } from "lodash";

@Injectable({ providedIn:'root' })
export class BlogChartService {
    getLevelBarChart(blogData: BlogPost[], title: string, height: number): PlotlyBarChartData {
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
        };  
        return chartData;
    }
}