import React, { useEffect, useState } from 'react';
import ContentHeader from "../../../components/ContentHeader";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { config, ERROR_MESSAGE, getUserProfile } from '../../../../functions/AdminHelper';
import axios from 'axios';

const Adminupdateintangible = () => {
    const { id, uid } = useParams()
    const navigate = useNavigate()
    const [profile, setprofile] = useState([]);
    const [intangible, setintangible] = useState([]);
    useEffect(() => {
        getUserProfile(uid).then((data) => {
            setprofile(data)
        })
        getIntangible();
    }, []);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setintangible({
            ...intangible,
            [name]: value,
        });
    };

    const updateIntangible = (e) => {
        e.preventDefault()

        axios.put(`investment/intangible/update/${id}/${uid}/`, intangible, config())
            .then(res => {
                console.log(res.data)
                res.data.response === 1 ? navigate(`/adminuser/farmers/intangible/${uid}`) : alert(res.data.message)
            })
            .catch(err => {
                alert(ERROR_MESSAGE)
            })
    }
    const getIntangible = () => {
        axios.get(`investment/intangible/single/${id}/${uid}/`, config())
            .then(res => {
                res.data.response === 1 ? setintangible(res.data.result) : alert(res.data.message)
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
                    <ContentHeader title="Update Intangible Assets" />

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
                                                <Link to={{ pathname: `/adminuser/farmers/intangible/${uid}` }} className="btn btn-sm btn-primary float-right"><i class="fa fa-arrow-left"></i> Go Back</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-body'>
                                        <form onSubmit={updateIntangible}>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Name</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={intangible.name} name="name" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Cost</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={intangible.cost} name="cost" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Disposal</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={intangible.disposal} name="disposal" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Improvement</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={intangible.improvement} name="improvement" />
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

export default Adminupdateintangible;
