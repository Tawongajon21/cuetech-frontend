import React, { useEffect, useState } from 'react';
import ContentHeader from "../../components/ContentHeader";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import { Link, useNavigate } from 'react-router-dom';
import { getAge, initTable } from '../../../functions/Helper';
import { getFarmers } from '../../../functions/AdminHelper';
const Adminusers = () => {
    const [profiles, setprofiles] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        initTable();
        getFarmers(0).then((data) => {
            setprofiles(data)
        })
    }, [])
    const role = localStorage.getItem("role");
    if (role === "1" || role === "2") {

        return (
            <div className="wrapper">
                <Navbar />
                <SideBar />
                <div className="content-wrapper">
                    <ContentHeader title="Users" />

                    <section className="content">
                        <div className="container-fluid">
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="float-right">
                                                <Link to={{ pathname: "/adminuser/users/add" }} className="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> Add New User</Link>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <table id="dtTable" className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Fullname</th>
                                                        <th>Gender</th>
                                                        <th>Age</th>
                                                        <th>Contact</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {profiles.map((farmers) => (
                                                        <tr>
                                                            <td>{farmers.full_name}</td>
                                                            <td>{farmers.gender}</td>
                                                            <td>{getAge(farmers.dob)}</td>
                                                            <td>{farmers.phone}</td>
                                                            <td><Link to={{ pathname: `/adminuser/users/details/${farmers.user}` }} className="btn btn-sm btn-info"> View Info</Link></td>
                                                        </tr>
                                                    ))}

                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Fullname</th>
                                                        <th>Gender</th>
                                                        <th>Age</th>
                                                        <th>Contact</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    } else if (role === "3") {
        navigate("/farmers/dashboard")
    }
    else {
        localStorage.clear()
        navigate("/")
    }
}

export default Adminusers;
