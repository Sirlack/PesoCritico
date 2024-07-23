import React from "react";
import { Password } from 'primereact/password';
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from "primereact/inputnumber";
import {Calendar} from "primereact/calendar";
import { RootState } from "../store/store";
import { connect,ConnectedProps } from 'react-redux';
import {wirAction} from "../store/reducers/weightInfoReducer";
import { NavLink } from "react-router-dom";
import {IInfoWeight} from "../store/models/IInfoWeight";

class WeightInfo extends React.Component<HeaderProps>{
    state: any ;
    constructor(props: HeaderProps){
        super(props);
    }
    async setWeightInfo(value:IInfoWeight){
        let response = await apis.setweight(value);
        /*this.props.midvalue({type:'name',payload:response.name});
        this.props.midvalue({type:'weight',payload:response.surname});        
        this.props.midvalue({type:'date',payload:response.date});*/
    }
    render(): React.ReactNode{
        return(
        <div>            
            <li><NavLink to="/main_window">main_window</NavLink></li>
            <InputText value={this.props.weightInfoReducer.currentValue.name} placeholder="Name" onChange={(e) => this.props.wirAction({type:'name',payload:e.target.value})}  />            
            <InputNumber value={this.props.weightInfoReducer.currentValue.weight}  placeholder="Weight" onChange={(e) => this.props.wirAction({type:'weight',payload:e.value}) }  />
            <Calendar value={this.props.weightInfoReducer.currentValue.date} placeholder="Date" onChange={(e: { value: any; }) => this.props.wirAction({type:'date',payload:e.value})} />
            <div><Button label="Insert" icon="pi pi-check" onClick={() => this.setWeightInfo(this.props.weightInfoReducer.currentValue)} /></div>
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
const connector = connect(mapStateToProps, {wirAction});
export default connector( WeightInfo);
//export default connect(mapStateToProps, {midvalue} )( Login);