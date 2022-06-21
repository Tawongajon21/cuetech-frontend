import React, { useEffect, useState } from 'react';
import ContentHeader from "../../../components/ContentHeader";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { config, ERROR_MESSAGE, getUserProfile } from '../../../../functions/AdminHelper';
import axios from 'axios';

const Adminupdateloan = () => {
    const { id, uid } = useParams()
    const navigate = useNavigate()
    const [profile, setprofile] = useState([]);
    const [loan, setloan] = useState([]);
    useEffect(() => {
        getUserProfile(uid).then((data) => {
            setprofile(data)
        })
        getLoan()
    }, []);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setloan({
            ...loan,
            [name]: value,
        });
    };

    const updateLoan = (e) => {
        e.preventDefault()

        axios.put(`finance/loan/update/${id}/${uid}/`, loan, config())
            .then(res => {
                console.log(res.data)
                res.data.response === 1 ? navigate(`/adminuser/farmers/loan/${uid}`) : alert(res.data.message)
            })
            .catch(err => {
                alert(ERROR_MESSAGE)
            })
    }
    const getLoan = () => {

        axios.get(`finance/loan/single/${id}/${uid}/`, config())
            .then(res => {
                console.log(res.data)
                res.data.response === 1 ? setloan(res.data.result) : alert(res.data.message)
            })
            .catch(err => {
                alert(ERROR_MESSAGE)
            })
    }
    const role = localStorage.getItem("role");
    if (role === "1" || role === "2") {

        return (
            <div className="wrapper">
                <Navbar />
                <SideBar />
                <div className="content-wrapper">
                    <ContentHeader title="Update Loan" />

                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 card mb-3">
                                    <div className="card-header">
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <h5>{profile.full_name}</h5>
                                            </div>
                                            <div className='col-md-6 float-right'>
                                                <Link to={{ pathname: `/adminuser/farmers/loan/${uid}` }} className="btn btn-sm btn-primary float-right"><i class="fa fa-arrow-left"></i> Go Back</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-body'>
                                        <form onSubmit={updateLoan}>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Principal</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={loan.principal} name="principal" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Amount</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={loan.amount} name="amount" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Interest Rate (%) </label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={loan.interest_rate} name="interest_rate" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Duration</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={loan.duration} name="duration" />
                                                </div>
                                            </div>
                                            <div class="row">

                                                <div class="col-md-6">
                                                    <label for="">Payment Plan</label>
                                                    <select name="payment_plan" id="" class="form-group form-control" onChange={handleInputChange} value={loan.payment_plan}>
                                                        <option value="">PLEASE SELECT PAYMENT PLAN</option>
                                                        <option value="Daily">Daily</option>
                                                        <option value="Weekly">Weekly</option>
                                                        <option value="Monthly">Monthly</option>
                                                        <option value="Anually">Anually</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Loan Type</label>
                                                    <select name="capital_type" id="" class="form-group form-control" onChange={handleInputChange} value={loan.capital_type}>
                                                        <option value="">PLEASE SELECT LOAN TYPE</option>
                                                        <option value="Short Term">Short Term</option>
                                                        <option value="Long Term">Long Term</option>
                                                    </select>
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

export default Adminupdateloan;
