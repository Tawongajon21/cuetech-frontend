import React, { useState, useEffect } from 'react';
import ContentHeader from "../../../components/ContentHeader";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import { config } from '../../../../functions/Helper';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Adminaddgeneralexpenses = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [generalexpenses, setgeneralexpenses] = useState({
        item: "N/A",
        descritpion: "N/A",
        cost: "N/A",
        owner: id
    });
    const [profile, setprofile] = useState([]);

    useEffect(() => {
        getFarmerProfile();
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setgeneralexpenses({
            ...generalexpenses,
            [name]: value,
        });
    };

    const handleCreateGenerealExpense = (e) => {
        e.preventDefault()
        axios.post('operations/generalexpenses/create/', generalexpenses, config())
            .then(res => {
                console.log(res.data)
                res.data.response === 1 ? alert(res.data.message) : alert(res.data.message + ". If This messages persists contact admin")
                navigate(`/adminuser/farmers/generalexpenses/${id}`)
            })
            .catch(err => {
                console.log(err)
            })
    }
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
    const role = localStorage.getItem("role");
    if (role === "1" || role === "2") {

        return (
            <div className="wrapper">
                <Navbar />
                <SideBar />
                <div className="content-wrapper">
                    <ContentHeader title="Add General Expenses" />

                    <section className="content">
                        <div className="container-fluid">
                            <div className='row'>
                                <div className='col-md-12 mb-2'>
                                    <div className="card">
                                        <div className="card-header">
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                </div>
                                                <div className='col-md-6 float-right'>
                                                    <Link to={{ pathname: `/adminuser/farmers/generalexpenses/${id}` }} className="btn btn-sm btn-primary float-right"><i class="fa fa-arrow-left"></i> Go Back</Link>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={handleCreateGenerealExpense}>
                                                <div class="row">

                                                    <div class="col-md-6">
                                                        <label for="">Item</label>
                                                        <select name="item" id="" className="form-control form-group" onChange={handleInputChange}>
                                                            <option value="">Please Select Item</option>
                                                            <option value="Labour / Wages Paid">Labour / Wages Paid</option>
                                                            <option value="Electricity">Electricity</option>
                                                            <option value="Telecommunication">Telecommunication</option>
                                                            <option value="Water and Security">Water and Security</option>
                                                            <option value="Fuel">Fuel</option>
                                                            <option value="Hired Transport">Hired Transport</option>
                                                            <option value="Maintanance">Maintanance</option>
                                                            <option value="Others">Others</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="">Cost</label>
                                                        <input type="text" class="form-group form-control" onChange={handleInputChange} name="cost" />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <label for="">Description</label>
                                                        <input type="text" class="form-group form-control" onChange={handleInputChange} name="description" />
                                                    </div>
                                                </div>

                                                <div className='row'>
                                                    <button className='btn btn-sm btn-primary' type="submit"><i className='fa fa-plus-circle'></i> Submit</button>
                                                </div>
                                            </form>
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

export default Adminaddgeneralexpenses;
