import React from "react";
import { Button } from 'primereact/button'; 
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Dialog } from 'primereact/dialog';
import { modvalue } from "../store/reducers/basicReducer";
import { RootState,AppDispatch } from "../store/store";
import { connect,ConnectedProps } from 'react-redux';
import MenuBar from "./Generics/MenuBar";
import { NavLink } from "react-router-dom";

class I_User extends React.Component<HeaderProps>{

    state: any ;
    constructor(props : HeaderProps){        
        super(props);
    }
    saveActor(){                           
        if(this.props.basicReducer.info.password === this.props.basicReducer.secondary.password2){
            this.props.modvalue({type:'secondary.visibleTest',payload:true});          
            apis.dev(this.props.basicReducer.info);            
        }    
                                            
    }    
    dialogTest(){

        return (<Dialog header="Header" visible={this.props.basicReducer.secondary.visibleTest} style={{ width: '50vw' }} onHide={() => this.props.modvalue({type:'secondary.visibleTest',payload:false})}>
        <p className="m-0">
            OK            
        </p>
    </Dialog> )
    }

    render(): React.ReactNode {
        return(
        <div>        
        {this.dialogTest()}
        <div><MenuBar></MenuBar></div>
        <li><NavLink to="/main_window">main_window</NavLink></li>
        <li><NavLink to="/test">test</NavLink></li>

        <div className="card flex justify-content-center">
            <Button label="Create Account" icon="pi pi-check" onClick={() => this.saveActor()} />
        </div>
        <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
            </span>
            <InputText value={this.props.basicReducer.info.name}  placeholder="Username" onChange={(e) => this.props.modvalue({type:'info.name',payload:e.target.value}) }  />
            <InputText value={this.props.basicReducer.info.surname}  placeholder="Surname" onChange={(e) => this.props.modvalue({type:'info.surname',payload:e.target.value}) }  />
        </div>
        <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
            </span>            
            <Password value={this.props.basicReducer.info.password} placeholder="Password" onChange={(e) => this.props.modvalue({type:'info.password',payload:e.target.value})} feedback={false} tabIndex={1} />            
            <Password value={this.props.basicReducer.secondary.password2} placeholder="Password" onChange={(e) =>  this.props.modvalue({type:'secondary.password2',payload:e.target.value})} feedback={false} tabIndex={1} />            
        </div>        

        <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">$</span>            
            <Calendar value={this.props.basicReducer.info.date} onChange={(e: { value: any; }) => this.props.modvalue({type:'info.date',payload:e.value})} />
            <span className="p-inputgroup-addon">.00</span>
        </div>

        <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">www</span>
            <InputText placeholder="Website" />
        </div>
       
        </div>);
    }
}
const mapStateToProps = (state: RootState)  => {    
    return{
        ...state ,
    };
}

type HeaderProps = ConnectedProps<typeof connector>;
const connector = connect(mapStateToProps, {modvalue});

export default connector( I_User);