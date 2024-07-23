import React from "react";
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from "../../store/store";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { wirAction } from "../../store/reducers/weightInfoReducer";
import { modvalue } from "../../store/reducers/basicReducer";
import { midvalue } from "../../store/reducers/userReducer";

class LoginPage extends React.Component<HeaderProps> {

    async readActor(value: any) {
        let response = await apis.read(value);
        this.props.modvalue({ type: 'info.name', payload: response.name });
        this.props.modvalue({ type: 'info.surname', payload: response.surname });
        this.props.modvalue({ type: 'info.date', payload: response.date });
        this.props.wirAction({ type: 'name', payload: response.name });
    }

    render(): React.ReactNode {
        return (
            <div>
                <InputText value={this.props.userReducer.info.name} placeholder="Username" onChange={(e) => this.props.midvalue({ type: 'info.name', payload: e.target.value })} />
                <Password value={this.props.userReducer.info.password} placeholder="Password" onChange={(e) => this.props.midvalue({ type: 'info.password', payload: e.target.value })} feedback={false} tabIndex={1} />
                <div><Button label="LogIn" icon="pi pi-check" onClick={() => this.readActor(this.props.userReducer)} /></div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        ...state,
    };
}
type HeaderProps = ConnectedProps<typeof connector>;
const connector = connect(mapStateToProps, { wirAction, modvalue, midvalue });
export default connector(LoginPage)