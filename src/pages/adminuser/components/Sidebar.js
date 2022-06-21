import React, { useState, useEffect } from 'react';
import logo from '../../components/AdminLTELogo.png';
import { Link } from "react-router-dom";
import { getProfile } from '../../../functions/AdminHelper';
const Sidebar = () => {
    const [profile, setProfile] = useState([]);

    useEffect(() => {

        getProfile().then((data) => {
            setProfile(data)
        })
    }, [])

    const links = [
        {
            icon: "fas fa-book nav-icon",
            name: "Farmers",
            url: "/adminuser/farmers",
        },
        {
            icon: "fas fa-users nav-icon",
            name: "Users",
            url: "/adminuser/users",
        }
    ]
    // console.log(profile)
    return (

        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to={'/adminuser/dashboard'} className="brand-link">
                <img src={logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: .8 }} />
                <span className="brand-text font-weight-light">CueTech</span>
            </Link>
            <div className='mt-4 mb-4'></div>
            {/* <!-- Sidebar --> */}
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="info">
                        <Link to={{ pathname: "#" }} className="d-block">{profile.full_name}</Link>
                    </div>
                </div>


                <nav className="mt-2 mb-3">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <Link to={"/adminuser/dashboard"} className="nav-link">
                                <i className="nav-icon git-pull-request-outline"></i>
                                <p>
                                    Dashboard
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{ pathname: "#" }} className="nav-link">
                                <i className="nav-icon far fa-address-card "></i>
                                <p>
                                    Account Settings
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to={{ pathname: "/adminuser/users/changepassword" }} className="nav-link">
                                        <i className="fas fa-lock nav-icon"></i>
                                        <p>Change Password</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {links.map((url) => (
                            <li className="nav-item">

                                <Link to={{ pathname: url.url }} className="nav-link">
                                    <i className={url.icon}></i>
                                    <p>
                                        {url.name}
                                    </p>
                                </Link>

                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar;
