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
            icon: "fas fa-users nav-icon",
            name: "Investments",
          
            urls:[
                {
                    name:'Looking for Potential Investments',
                    icon:'fas fa-book nav-icon',
                    url:'farmers/lookingforpotentialinvestments'
                }
            ]
        }
        ,
        {
            icon: "fas fa-users nav-icon",
            name: "Finance",
            
          
            urls:[
                {
                    name:'Owner Capital',
                    icon:'fas fa-book nav-icon',
                    url:'farmers/ownercapital'
                },
                {
                    name:'Inheritance',
                    icon:'fas fa-book nav-icon',
                    url:'farmers/inheritance'
                },

            ]
        },
        
        {
            icon: "fas fa-users nav-icon",
            name: "Financial Statements",
            
            
          
            urls:[
                {
                    name:'Owner Capital',
                    icon:'fas fa-book nav-icon',
                    url:'farmers/ownercapital'
                },
                {
                    name:'Inheritance',
                    icon:'fas fa-book nav-icon',
                    url:'farmers/inheritance'
                },

            ]
           
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
             {
/** <Link to={{ pathname: "#" }} className="d-block">{profile.full_name}</Link> */
             }  
              <Link to={{ pathname: "#" }} className="d-block">Tariro Chimutopo</Link>        
                    </div>
                </div>


                <nav className="mt-2 mb-3">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <Link to={"/farmers/dashboard"} className="nav-link">
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
                                  Operations
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                            
                                    <Link to={{ pathname: "/farmeruser/farmers/operations/generalexpenses/:id" }} className="nav-link">
                                        <i className="fas fa-lock nav-icon"></i>
                                        <p>General</p>
                                    </Link>
                                    <Link to={{ pathname: "/farmeruser/farmers/operations/orchard/:id" }} className="nav-link">
                                        <i className="fas fa-lock nav-icon"></i>
                                        <p>Orchard</p>
                                       
                                    </Link>
                                    <Link to={{ pathname: "/farmeruser/farmers/operations/plants/:id" }} className="nav-link">
                                        <i className="fas fa-lock nav-icon"></i>
                                        <p>Plants</p>
                                    </Link>
                                    <Link to={{ pathname: "/farmeruser/farmers/livestock/:id" }} className="nav-link">
                                        <i className="fas fa-lock nav-icon"></i>
                                        <p>Livestock</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to={{ pathname: "#" }} className="nav-link">
                                <i className="nav-icon far fa-address-card "></i>
                                <p>
                                 Investments
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to={{ pathname: "/farmeruser/farmers/investments/intangible/:id" }} className="nav-link">
                                        <i className="fas fa-lock nav-icon"></i>
                                        <p>Intangible</p>
                                    </Link>
                                    <Link to={{ pathname: "/farmers/investments/savings/:id" }} className="nav-link">
                                        <i className="fas fa-lock nav-icon"></i>
                                        <p>Savings</p>
                                    </Link>
                                   
                                    <Link to={{ pathname: "/farmeruser/farmers/investments/tangible/:id" }} className="nav-link">
                                        <i className="fas fa-lock nav-icon"></i>
                                        <p>Tangible</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to={{ pathname: "#" }} className="nav-link">
                                <i className="nav-icon far fa-address-card "></i>
                                <p>
                                Finance
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to={{ pathname: "/farmers/finance/ownercapital" }} className="nav-link">
                                        <i className="fas fa-lock nav-icon"></i>
                                        <p>Owner Capital</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                
                                    <Link to={{ pathname: "/farmers/finance/inheritance/:id" }} className="nav-link">
                                    
                                        <i className="fas fa-lock nav-icon"></i>
                                        <p>Inheritance</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={{ pathname: "/farmers/finance/loan" }} className="nav-link">
                                        <i className="fas fa-lock nav-icon"></i>
                                        <p>Loan</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to={{ pathname: "#" }} className="nav-link">
                                <i className="nav-icon far fa-address-card "></i>
                                <p>
                                Financial Statements
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to={{ pathname: "/farmers/Dump Sillage" }} className="nav-link">
                                        <i className="fas fa-lock nav-icon"></i>
                                        <p>Cash Flow Statement</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={{ pathname: "/farmers/Dump Sillage" }} className="nav-link">
                                        <i className="fas fa-lock nav-icon"></i>
                                        <p> Statement of Financial Position</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={{ pathname: "/farmers/Dump Sillage" }} className="nav-link">
                                        <i className="fas fa-lock nav-icon"></i>
                                        <p>Profit and Loss Statement</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar;
