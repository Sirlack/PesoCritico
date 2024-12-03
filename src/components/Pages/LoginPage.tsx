import React from "react";
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from "../../store/store";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { wirAction,wirAction2 } from "../../store/reducers/weightInfoReducer";
import { modAction } from "../../store/reducers/gameReducer";
import { modvalue } from "../../store/reducers/basicReducer";
import { midvalue } from "../../store/reducers/userReducer";
import { NavLink } from "react-router-dom";
import { Dialog } from 'primereact/dialog';
import { Navigate } from "react-router";
import { Info } from "electron";
        

class LoginPage extends React.Component<HeaderProps> {

    visible:boolean = false;
    validate:boolean = false;


 
    
    handleReadActor = async (value: any) => {
        let response = await apis.read(value);
        if(response){
            this.props.modvalue({ type: 'info.name', payload: response.name });
            this.props.modvalue({ type: 'info.surname', payload: response.surname });
            this.props.modvalue({ type: 'info.date', payload: response.date });
            this.props.wirAction({ type: 'name', payload: response.name });

            let response2 = await apis.getWeightList(response.name);
            this.props.wirAction2({type:'name',payload:response2});
            let responseGame = await apis.read({
                tableName:"games",
                fieldName:"juego.namegame",
                fieldValue:"The Gordos",
            });
            if(responseGame){                
                this.props.modAction({type:'juego', payload:responseGame.juego}); 
                this.validate=true;
            }

        }
        else{
            this.visible=true;
        }
    }
    popUpUserResponse(){
         
        return(
        <Dialog header="Header" visible={this.visible} style={{ width: '50vw' }} onHide={()=>{this.visible =false;}}>
        <p className="m-0">
            No user!
        </p>
        </Dialog>
        );
    }

    loginpage():any{
        return(
            <>
            <div className="h-full flex items-center justify-center h-screen w-screen">

            <div className="w-1/2 flex flex-col gap-4 content-around">
                <div className="">
            <InputText className="w-full" value={this.props.userReducer.info.name} placeholder="Username" onChange={(e) => this.props.midvalue({ type: 'info.name', payload: e.target.value })} />
            </div>
            <div className="" >
            <Password className="w-full" value={this.props.userReducer.info.password} placeholder="Password" onChange={(e) => this.props.midvalue({ type: 'info.password', payload: e.target.value })} feedback={false} tabIndex={1} />
            </div> 
                <div className="">
            <Button className="w-full" label="LogIn" icon="pi pi-check" onClick={() => this.handleReadActor(this.props.userReducer)} />              
            </div>              
            <div className= ""><NavLink to="/create_user"><span className="flex justify-center font-serif text-sm tracking-wide text-blue-500 hover:text-blue-600">Create new user</span></NavLink></div>              
            </div>  
            <Dialog header="Header" visible={this.visible} style={{ width: '50vw' }} onHide={()=>{this.visible =false;}}>
            <p className="m-0">
                No user!
            </p>
            </Dialog>
            {/*this.popUpUserResponse()*/}
        </div>
    </> 
        );
    }
 
    render(): React.ReactNode {
               
        if(!this.validate){
            return this.loginpage();
        }
        else{
            return <Navigate to="/create_user" />;
        }
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        ...state,
    };
}
type HeaderProps = ConnectedProps<typeof connector>;
const connector = connect(mapStateToProps, { wirAction, wirAction2, modvalue, midvalue, modAction });
export default connector(LoginPage)