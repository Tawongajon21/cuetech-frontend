import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
    handleLogOut = () => {
        const r = window.confirm("Are you sure you want to Sign Out?");
        if (r === true) {
            localStorage.clear()
            window.location = "/";
        }
    }
    render() {
        return (

            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" data-widget="pushmenu" to={{ pathname: "#" }} role="button"><i className="fas fa-bars"></i></Link>
                    </li>
                </ul>


                <ul className="navbar-nav ml-auto">
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to={{ pathname: "#" }} onClick={this.handleLogOut} className="nav-link active" role='button'>Logout</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}