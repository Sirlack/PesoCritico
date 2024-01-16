import React, { useState } from "react";
import { Button } from 'primereact/button'; 
import { InputText } from 'primereact/inputtext';
import { InputNumber } from "primereact/inputnumber";
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Dialog } from 'primereact/dialog';
import { type SaveUser, modvalue } from "../store/reducers/basicReducer";
import { RootState,AppDispatch } from "../store/store";
import { connect } from 'react-redux'

interface MiComponenteProps {
    miObjeto: RootState;
    modvalue: (value: {payload: any, type: any}) => void;
  }
type reducer = RootState | typeof modvalue;

class I_User extends React.Component<RootState>{

    state: any ;
    constructor(props : RootState){
        super(props);
        /*this.state={
            info:{date:null,
            name: null,
            surname: null,
            password: null},
            secondary:{
            password2: null,
            visible: false,
            visibleTest: false,
            stateTest: null
            }
        }*/
    }
    /*checkPassword(value : any):void {
        this.setState(this.modDataUser(value,"password2"));
        if(this.state.info.password === value){
            this.state.secondary.visible = true;
        }
    } */

    /*dialogPassword(){
        return (<Dialog header="Header" visible={this.state.secondary.visible} style={{ width: '50vw' }} onHide={() => this.setState(this.modDataUser(false,"visible"))}>
        <p className="m-0">
            OK SAME PASSWORD. {this.state.info.password}            
        </p>
        <p>JSON state: {JSON.stringify(this.state)}</p>
        <p>JSON state: {JSON.stringify(this.props.info)}</p>
    </Dialog> )
    }*/

    /*modDataUser(value : any, field: string): Object{
        
        let newState = Object.assign({} , this.state);
        if("password" == field   || "date" == field || "name" ==field || "surname" == field){
            newState.info[field] = value;
        }
        else if("password2" == field || "visible" == field || "visibleTest" == field || "stateTest" == field ){
            newState.secondary[field] = value;
        }
        return newState;

    }*/

    /*saveActor(){        
        this.setState(this.modDataUser(true,"visibleTest"));         
        apis.dev(this.state.info);                                            
    }*/
    saveActor(){    
        if(this.props.info.password === this.props.secondary.password2){
            this.props.modvalue({type:'secondary.visibleTest',payload:true});
            apis.dev(this.props.info);
        }    
                                            
    }    
    /*dialogTest(){

        return (<Dialog header="Header" visible={this.state.secondary.visibleTest} style={{ width: '50vw' }} onHide={() => this.setState(this.modDataUser(false,"visibleTest"))}>
        <p className="m-0">
            OK            
        </p>
    </Dialog> )
    }*/
    dialogTest(){

        return (<Dialog header="Header" visible={this.props.secondary.visibleTest} style={{ width: '50vw' }} onHide={() => this.props.modvalue({type:'secondary.visibleTest',payload:false})}>
        <p className="m-0">
            OK            
        </p>
    </Dialog> )
    }

    render(): React.ReactNode {
        return(
        <div>
        {/*this.dialogPassword()*/}
        {this.dialogTest()}

        <div className="card flex justify-content-center">
            <Button label="Create Account" icon="pi pi-check" onClick={() => this.saveActor()} />
        </div>
        <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
            </span>
            {/*<InputText value={this.state.info.name}  placeholder="Username" onChange={(e) => this.setState(this.modDataUser(e.target.value,"name")) }  />*/}
            {/*<InputText value={this.state.info.surname}  placeholder="Surname" onChange={(e) => this.setState(this.modDataUser(e.target.value,"surname")) }  />*/}
            <InputText value={this.props.info.name}  placeholder="Username" onChange={(e) => this.props.modvalue({type:'info.name',payload:e.target.value}) }  />
            <InputText value={this.props.info.surname}  placeholder="Surname" onChange={(e) => this.props.modvalue({type:'info.surname',payload:e.target.value}) }  />
        </div>
        <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
            </span>            
            {/*<Password value={this.state.info.password} placeholder="Password" onChange={(e) => this.setState(this.modDataUser(e.target.value,"password"))} feedback={false} tabIndex={1} />*/}            
            {/*<Password value={this.state.info.password2} placeholder="Password" onChange={(e) =>  this.checkPassword( e.target.value)} feedback={false} tabIndex={1} />*/}
            <Password value={this.props.info.password} placeholder="Password" onChange={(e) => this.props.modvalue({type:'info.password',payload:e.target.value})} feedback={false} tabIndex={1} />            
            <Password value={this.props.secondary.password2} placeholder="Password" onChange={(e) =>  this.props.modvalue({type:'secondary.password2',payload:e.target.value})} feedback={false} tabIndex={1} />            
        </div>        

        <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">$</span>
            {/*<Calendar value={this.state.info.date} onChange={(e: { value: any; }) => this.setState(this.modDataUser(e.value,"date") )} />*/}
            <Calendar value={this.props.info.date} onChange={(e: { value: any; }) => this.props.modvalue({type:'info.date',payload:e.value})} />
            <span className="p-inputgroup-addon">.00</span>
        </div>

        <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">www</span>
            <InputText placeholder="Website" />
        </div>
       
        </div>);
    }
}
const mapStateToProps = (state: RootState) => {    
    return{
        ...state,
    };
}

export default connect(mapStateToProps, {modvalue})( I_User);