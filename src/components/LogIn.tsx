import React from "react";
import { Password } from 'primereact/password';
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { RootState } from "../store/store";
import { connect,ConnectedProps } from 'react-redux';
import {wirAction,wirAction2,setGeneralList} from "../store/reducers/weightInfoReducer";
import { modvalue } from "../store/reducers/basicReducer";
import {midvalue} from "../store/reducers/userReducer";
import { modAction } from "../store/reducers/gameReducer";
import { NavLink } from "react-router-dom";
//import Chart from "./Generics/Chart";
import { Chart } from 'primereact/chart';
import LineChart from "./Generics/LineChart";
import { IPieData } from "./Generics/PieChart";
import PieChart from "./Generics/PieChart";



class Login extends React.Component<HeaderProps>{
    state: any ;
    constructor(props: HeaderProps){
        super(props);
    }
    async readActor(value:any){
        let response = await apis.read(value);
        this.props.modvalue({type:'info.name',payload:response.name});
        this.props.modvalue({type:'info.surname',payload:response.surname});        
        this.props.modvalue({type:'info.date',payload:response.date});
        this.props.wirAction({type:'name',payload:response.name});
        let response2 = await apis.getWeightList(response.name);
        this.props.wirAction2({type:'name',payload:response2});
        let responseGame = await apis.read({
            tableName:"games",
            fieldName:"juego.namegame",
            fieldValue:"The Gordos",
        });
        this.props.modAction({type:'juego', payload:responseGame.juego});
    }
    async chargeDates(value:any){
        let response = await apis.chargeDates();
        this.props.setGeneralList({payload:response});
        
    }
    render(): React.ReactNode{
        
        let complexList : any[] = [];
        complexList.push(this.props.weightInfoReducer.listValues && this.props.weightInfoReducer.listValues.map(objeto => objeto.weight));
        complexList.push(this.props.weightInfoReducer.listValues && this.props.weightInfoReducer.listValues.map(objeto => objeto.weight + 11));
 



let complexList2 : any[] = [];
        // Objeto para agrupar los pesos por nombre
const agrupadoPorNombre:any = {};

// Agrupar los pesos por nombre
this.props.weightInfoReducer.generalListValues && this.props.weightInfoReducer.generalListValues.forEach(obj => {
  const { weight,name } = obj;
  if (!agrupadoPorNombre[name]) {
    agrupadoPorNombre[name] = [];
  }
  agrupadoPorNombre[name].push(weight);
});

// Obtener los nombres únicos
const nombresUnicos = Object.keys(agrupadoPorNombre);

// Crear el array asociado a cada nombre con los valores de peso
nombresUnicos.forEach(nombre => complexList2.push(agrupadoPorNombre[nombre]));
let l_pieData : IPieData;
l_pieData = {datasets:[],labels:[]};
nombresUnicos.forEach(nombre =>{ 
    l_pieData.labels.push(nombre);
    l_pieData.datasets.push(agrupadoPorNombre[nombre].reduce((accumulator:any, currentValue:any) => {
        return accumulator + currentValue;
      }, 0))

});
let value : IPieData = {datasets:complexList.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0), labels:["Nacho","Maribel"]};

                     
        return(
        <div>                        
            <InputText value={this.props.userReducer.info.name}  placeholder="Username" onChange={(e) => this.props.midvalue({type:'info.name',payload:e.target.value}) }  />            
            <Password value={this.props.userReducer.info.password} placeholder="Password" onChange={(e) => this.props.midvalue({type:'info.password',payload:e.target.value})} feedback={false} tabIndex={1} />                        
            <div><Button label="LogIn" icon="pi pi-check" onClick={() => this.readActor(this.props.userReducer)} /></div>           
            <li><NavLink to="/create_user">Create User</NavLink></li>
            <li><NavLink to="/insert_weight">Insert Info Weight</NavLink></li>
            <li><NavLink to="/test">Test Chart</NavLink></li>
            <div><Button label="ChargeDates" icon="pi pi-check" onClick={() => this.chargeDates(this.props.userReducer)} /></div>           
            {/*<LineChart complexLis = {complexList}></LineChart>   */}
            <LineChart complexLis={complexList2}></LineChart>         
            <PieChart info={l_pieData}></PieChart>
        </div>
        );
    }
}
const mapStateToProps = (state: RootState) => {    
    return{
        ...state,
    };
}
type HeaderProps = ConnectedProps<typeof connector>;
const connector = connect(mapStateToProps, {wirAction,wirAction2,modvalue,midvalue,setGeneralList,modAction});
export default connector( Login)
//export default connect(mapStateToProps, {midvalue} )( Login);