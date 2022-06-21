import React, { useState, useEffect } from 'react';
import ContentHeader from "../../../components/ContentHeader";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import { config } from '../../../../functions/Helper';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Adminaddowncapital = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [capital, setcapital] = useState({
        amount: 0.00,
        capital_type: "",
        owner: id
    });
    const [profile, setprofile] = useState([]);

    useEffect(() => {
        getFarmerProfile();
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setcapital({
            ...capital,
            [name]: value,
        });
    };

    const handleCreateCapital = (e) => {
        e.preventDefault()
        axios.post('finance/capital/create/', capital, config())
            .then(res => {
                console.log(res.data)
                res.data.response === 1 ? alert(res.data.message) : alert(res.data.message + ". If This messages persists contact admin")
                navigate(`/adminuser/farmers/capital/${id}`)
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
                    <ContentHeader title="Add Owner Capital" />

                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 card mb-3">
                                    <div className="card-header">
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <h5>{profile.full_name}</h5>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="float-right">
                                                    <Link to={{ pathname: `/adminuser/farmers/capital/${id}` }} className="btn btn-sm btn-primary"><i class="fa fa-arrow-left"></i> Go Back</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-body'>
                                        <form onSubmit={handleCreateCapital}>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Amount</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="amount" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Type</label>
                                                    <select name="capital_type" onChange={handleInputChange} id="" class="form-group form-control">
                                                        <option value="">PLEASE SELECT TYPE</option>
                                                        <option value="Addition">Addition</option>
                                                        <option value="Withdrawal">Withdrawal</option>
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

export default Adminaddowncapital;
