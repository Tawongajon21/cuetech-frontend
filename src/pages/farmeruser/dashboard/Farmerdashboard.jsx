import React from 'react'
//import Navbar from "../components/Navbar";
//import SideBar from "../components/Sidebar";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../adminuser/components/Navbar';

import Sidebar from '../Components/Sidebar';
import ContentHeader from "../../components/ContentHeader";

function Farmerdashboard() {
  return (
    <>
 <div className="wrapper">
                <Navbar />
                <Sidebar />
                <div className="content-wrapper">
                    <ContentHeader title="Farmers Dashboard" />

                    <section className="content">
                        <div className="container-fluid">
                            <div className='row'>
                                <div className="col-lg-4 col-6">
                                    <div className="small-box bg-info">
                                        <div className="inner">
                                            <h3>9</h3>
                                            <p>Farmers</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-user"></i>
                                        </div>
                                        <Link to={{ path: "#" }} className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-6">
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <h3>3</h3>
                                            <p>Admins</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-users"></i>
                                        </div>
                                        <Link to={{ path: "#" }} className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-6">
                                    <div className="small-box bg-warning">
                                        <div className="inner">
                                            <h3>7</h3>
                                            <p>Agents</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-user"></i>
                                        </div>
                                        <Link to={{ path: "#" }} className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
    </>
  )
}

export default Farmerdashboard