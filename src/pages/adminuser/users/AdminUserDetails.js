import React, { useEffect, useState } from 'react';
import ContentHeader from "../../components/ContentHeader";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { config } from '../../../functions/Helper';
import Swal from 'sweetalert2';
import axios from 'axios';
const Adminuserdetails = () => {
    const { id } = useParams();
    const [profile, setprofile] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        getFarmerProfile();
    }, [])

    const handleUpdate = () => {
        const ask = window.confirm("Are you sure you want to update ?");
        ask === true ? updateFarmerProfile() : alert("Farmer not Updated")
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setprofile({
            ...profile,
            [name]: value,
        });
    };
    const getFarmerProfile = () => {
        axios.get(`users/get-user-profile/${id}/`, config())
            .then(res => {
                if (res.data.response === 1) {
                    setprofile(res.data.result);
                } else {

                    alert(res.data.message + ". If This messages persists contact admin");
                }
            })
            .catch(err => {
                alert("Something Went wrong Please Try again . If This messages persists contact admin");
            })
    }

    const updateFarmerProfile = () => {
        axios.put(`/users/admin-update-profile/${id}/`, profile, config())
            .then(res => {
                console.log(res.data)
                res.data.response === 1 ? alert(res.data.message) : alert(res.data.message + ".. If This messages persists contact admin ")
            })
            .catch(err => {
                console.log(err)
                alert("Something Went wrong Please Try again . If This messages persists contact admin");
            })
    }
    const role = localStorage.getItem("role");
    if (role === "1" || role === "2") {

        return (
            <div className="wrapper">
                <Navbar />
                <SideBar />
                <div className="content-wrapper">
                    <ContentHeader title="Users Information" />

                    <section className="content">
                        <div className="container-fluid">
                            <div className='row'>
                                <div className='col-md-12 mb-3'>
                                    <div className="card">
                                        <div className="card-header bg-secondary">
                                            <div className="float-right">
                                                <Link to={{ pathname: "/adminuser/users" }} className="btn btn-sm btn-light mr-2"><i class="fa fa-arrow-left"></i> Go Back</Link>
                                                <button onClick={updateFarmerProfile} className="btn btn-sm btn-primary mr-2"><i class="fa fa-edit"></i> Update</button>
                                                <Link to={{ pathname: "/adminuser/farmers/delete" }} className="btn btn-sm btn-danger"><i class="fa fa-edit"></i> Delete</Link>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <span class="info-title">
                                                            <strong>Full Name</strong>
                                                        </span>
                                                        <input className='form-control small-input' value={profile.full_name} onChange={handleInputChange} name="full_name" type="text" />
                                                    </div>
                                                    <div className="form-group">
                                                        <span class="info-title">
                                                            <strong>Level Of Education</strong>
                                                        </span>
                                                        <input className='form-control small-input' value={profile.education} onChange={handleInputChange} name="education" type="text" />
                                                    </div>




                                                </div>
                                                <div className="col-md-4">

                                                    <div className="form-group">
                                                        <span class="info-title">
                                                            <strong>Contact</strong>
                                                        </span>
                                                        <input className='form-control small-input' value={profile.phone} onChange={handleInputChange} name="phone" type="text" />

                                                    </div>
                                                    <div className="form-group">

                                                        <span class="info-title">
                                                            <strong>Gender</strong>
                                                        </span>
                                                        <select name="gender" id="" value={profile.gender} onChange={handleInputChange} className='form-control small-input'>
                                                            <option value="">Select Gender</option>
                                                            <option value="Male" >Male</option>
                                                            <option value="Female">Female</option>
                                                        </select>

                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <span class="info-title">
                                                            <strong>Address</strong>
                                                        </span>
                                                        <input className='form-control small-input' value={profile.address} onChange={handleInputChange} name="address" type="text" />

                                                    </div>
                                                    <div className="form-group">
                                                        <span class="info-title">
                                                            <strong>Age</strong>
                                                        </span>
                                                        <input className='form-control small-input' value={profile.dob} onChange={handleInputChange} name="dob" type="date" />
                                                    </div>

                                                </div>

                                            </div>
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

export default Adminuserdetails;
