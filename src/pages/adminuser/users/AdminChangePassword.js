import React, { useState } from 'react';
import ContentHeader from "../../components/ContentHeader";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import { Link, useNavigate } from 'react-router-dom';
import { updateData } from '../../../functions/AdminHelper';

const Adminchangepassword = () => {
    const navigate = useNavigate()
    const [user, setuser] = useState({
        password: "",
        password2: ""
    });
    const updatePassword = (e) => {
        e.preventDefault();
        if (user.password !== user.password2) {
            alert("Passwords Do Not Match")
        }
        else {
            const url = "users/update/"
            updateData(url, user).then((data) => {
                data.response === 1 ? navigate("/adminuser/dashboard") : alert(data.message)
            })
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setuser({
            ...user,
            [name]: value,
        });
    };
    const role = localStorage.getItem("role");
    if (role === "1" || role === "2") {

        return (
            <div className="wrapper">
                <Navbar />
                <SideBar />
                <div className="content-wrapper">
                    <ContentHeader title="Add New User" />

                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 card mb-3">
                                    <div className='card-header'>
                                        <div className='float-right'>
                                            <div className='button-group'>
                                                <Link to={{ pathname: "/adminuser/dashboard" }} className="btn btn-primary btn-sm" ><i className='fa fa-arrow-left'></i> Go Back</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-body'>
                                        <form onSubmit={updatePassword}>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Password</label>
                                                    <input type="password" class="form-group form-control" onChange={handleInputChange} name="password" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Re-Enter Pasword </label>
                                                    <input type="password" class="form-group form-control" onChange={handleInputChange} name="password2" />
                                                </div>
                                            </div>

                                            <div class="row">
                                                <button class="btn-sm btn btn-primary" type="submit"> <i className='fa fa-plus-circle'></i> Submit</button>
                                            </div>
                                        </form>
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

export default Adminchangepassword;
