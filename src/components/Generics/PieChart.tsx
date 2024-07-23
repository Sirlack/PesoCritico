import React from "react";
import { Chart } from "primereact/chart";

interface IlinePie{    
    info: IPieData
}
export interface IPieData{
    labels:string[],
    datasets:number[]
}

class PieChart extends React.Component<IlinePie>{
    state: any ;
    constructor(props: IlinePie){
        super(props);
    }
    render(): React.ReactNode{
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: this.props.info.labels,
            datasets: [
                {
                    data: this.props.info.datasets,
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--green-400')
                    ]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        return(

            
            <div>            
                {data && <Chart type="pie" data={data} options={options}></Chart>}
            </div>
            );
        }
}
export default PieChart;