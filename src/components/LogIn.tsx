import React from "react";
import { Password } from 'primereact/password';
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { RootState } from "../store/store";
import { connect,ConnectedProps } from 'react-redux';
import {midvalue} from "../store/reducers/userReducer";
import { modvalue } from "../store/reducers/basicReducer";
import { NavLink } from "react-router-dom";


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
    }
    render(): React.ReactNode{
        return(
        <div>            
            <li><NavLink to="/main_window">main_window</NavLink></li>
            <Password value={this.props.userReducer.info.password} placeholder="Password" onChange={(e) => this.props.midvalue({type:'info.password',payload:e.target.value})} feedback={false} tabIndex={1} />            
            <InputText value={this.props.userReducer.info.name}  placeholder="Username" onChange={(e) => this.props.midvalue({type:'info.name',payload:e.target.value}) }  />
            <div><Button label="LogIn" icon="pi pi-check" onClick={() => this.readActor(this.props.userReducer)} /></div>
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
const connector = connect(mapStateToProps, {midvalue,modvalue});
export default connector( Login)
//export default connect(mapStateToProps, {midvalue} )( Login);