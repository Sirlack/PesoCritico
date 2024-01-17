import React from "react";
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { RootState } from "../store/store";
import { connect } from 'react-redux';
import midvalue from "../store/reducers/userReducer";
import { NavLink } from "react-router-dom";


class Login extends React.Component<RootState>{
    constructor(props: RootState){
        super(props);
    }
    render(){
        return(
        <div>
            <li><NavLink to="/main_window">main_window</NavLink></li>
            <Password value={this.props.userReducer.info.password} placeholder="Password" onChange={(e) => this.props.userReducer.midvalue({type:'info.password',payload:e.target.value})} feedback={false} tabIndex={1} />            
            <InputText value={this.props.userReducer.info.name}  placeholder="Username" onChange={(e) => this.props.userReducer.midvalue({type:'info.name',payload:e.target.value}) }  />
        </div>
        );
    }
}
const mapStateToProps = (state: RootState) => {    
    return{
        ...state,
    };
}
export default connect(mapStateToProps, {midvalue} )( Login);