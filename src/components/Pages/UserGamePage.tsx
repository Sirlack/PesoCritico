import React from "react";
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from "../../store/store";


class UserGamePage extends React.Component<HeaderProps> {

    render(): React.ReactNode {
        return (<> 
                    <div className="section"> 
                        <div className="container">Nacho</div>                        
                    </div>               
                </>
        );
    }
    
}

const mapStateToProps = (state: RootState) => {
    return {
        ...state,
    };
}
type HeaderProps = ConnectedProps<typeof connector>;
const connector = connect(mapStateToProps, );
export default connector(UserGamePage)