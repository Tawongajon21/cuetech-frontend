import React, { useState } from 'react';
import ContentHeader from "../../components/ContentHeader";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { config } from '../../../functions/Helper';
const Adminadduser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        password: "",
        is_staff: true,
        is_superuser: false,
    });
    const [profile, setprofile] = useState({
        full_name: "",
        education: "",
        gender: "",
        dob: "",
        phone: "",
        location: "N/A",
        country: "N/A",
        province: "N/A",
        address: "",
        zone: "N/A",
        soil: "N/A",
        ocupation: 2,
        user: ""
    });

    const handleInputChange1 = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setprofile({
            ...profile,
            [name]: value,
        });
    };
    const handleLevel = (e) => {
        const { value } = e.target;
        if (value === "1") {
            setUser({
                ...user,
                is_superuser: true
            })
            setprofile({
                ...profile,
                ocupation: 1
            })
        } else {
            setUser({
                ...user,
                is_superuser: false
            })
            setprofile({
                ...profile,
                ocupation: 2
            })
        }
    };
    const handleAddFarmer = e => {
        e.preventDefault();

        axios.post("/users/register/", user, config())
            .then(res => {
                if (res.data.response === 1) {
                    axios.post(`/users/create-profile/${res.data.userid}/`, profile, config())
                        .then(res => {
                            if (res.data.response === 1) {
                                alert("User Added Successfully");
                                navigate("/adminuser/users")
                            }
                        })
                        .catch(err => {
                            alert("User Not Added Try agin")
                        })
                }
                else {
                    console.log(res.data.message)
                    alert("Something went wrong or Username already exist")
                }
            })
            .catch(err => {
                alert("Something went wrong try again")
            })
    }
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
                                                <Link to={{ pathname: "/adminuser/users" }} className="btn btn-primary btn-sm" ><i className='fa fa-arrow-left'></i> Go Back</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-body'>
                                        <form onSubmit={handleAddFarmer}>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Username</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange1} name="username" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Pasword</label>
                                                    <input type="password" class="form-group form-control" onChange={handleInputChange1} name="password" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label for="">Access Level</label>
                                                    <select name="level" id="" onChange={handleLevel} class="form-group form-control">
                                                        <option value="">PLEASE SELECT ACCESS LEVEL</option>
                                                        <option value="1">Admin</option>
                                                        <option value="2">Staff</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Full Name</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="full_name" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Level Of Education</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="education" />
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label for="">Gender</label>
                                                    <select name="gender" id="" onChange={handleInputChange} class="form-group form-control">
                                                        <option value="">PLEASE SELECT GENDER</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-4">
                                                    <label for="">DOB</label>
                                                    <input type="date" onChange={handleInputChange} class="form-group form-control" name="dob" />
                                                </div>
                                                <div class="col-md-4">
                                                    <label for="">Contact</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="phone" />
                                                </div>
                                            </div>


                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label for="">Address</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="address" />
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

export default Adminadduser;
