import React from "react";
import logo from '../components/AdminLTELogo.png';

export default class PreLoader extends React.Component {

    render() {
        return (
            <div className="preloader flex-column justify-content-center align-items-center">
                <img className="animation__shake" src={logo} alt="AdminLTELogo" height="60" width="60" />
            </div>
        )
    }
}