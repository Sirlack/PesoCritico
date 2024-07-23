import React from "react";
import { ConnectedProps, connect } from "react-redux";
import { RootState } from "../../store/store";
import { Chart } from 'primereact/chart';
import { IListInfoWeight } from "../../store/models/IInfoWeight";
 
interface IlineChart{
    //list: any[],
    complexLis: any[]
}

class LineChart extends React.Component<IlineChart>{
    state: any ;
    constructor(props: IlineChart){
        super(props);
    }
    render(): React.ReactNode{
        const documentStyle = getComputedStyle(document.documentElement);
        //const listaDePropiedades1: string[] = this.props.weightInfoReducer.listValues.map(objeto => objeto.weight);
        
        let datasetsArray: any[] = [];
        
        this.props.complexLis.forEach((e,index )=> datasetsArray.push(     
            {                    
                label: `${index} Dataset`,
                data: e,
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                tension: 0.4} 
            ));


        //let listaPesos: number[] = this.props.list ;
        
       
   /*     let lista1 = 
        {                    label: 'First Dataset',
            data: listaPesos,
            fill: false,
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            tension: 0.4};
        let lista2 = 
            {                    label: 'First Dataset',
                data: listaPesos && listaPesos.map(e => e + 10),
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                tension: 0.4};*/
        /*datasetsArray.push(lista1);                            
        datasetsArray.push(lista2);  */                         
        const data = {
            labels: ['January', 'February', 'March', 'April'/*, 'May', 'June', 'July'*/],
            datasets: datasetsArray/*[
                {
                    label: 'First Dataset',
                    data: listaPesos,
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4
                }*//*,
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    tension: 0.4
                }*/
            //]
        };  
        
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');        
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };                      
        return(

            
        <div>            
            {datasetsArray && <Chart type="line" data={data} options={options}></Chart>}
        </div>
        );
    }
}

export default  LineChart;