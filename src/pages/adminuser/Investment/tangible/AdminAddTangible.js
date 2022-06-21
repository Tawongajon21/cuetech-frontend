import React, { useEffect, useState } from 'react';
import ContentHeader from "../../../components/ContentHeader";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { config, ERROR_MESSAGE, getUserProfile } from '../../../../functions/AdminHelper';
import axios from 'axios';

const Adminaddtangible = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [profile, setprofile] = useState([]);
    const [tangible, settangible] = useState({
        name: "N/A",
        cost: 0,
        disposal: 0,
        owner: id
    });
    useEffect(() => {
        getUserProfile(id).then((data) => {
            setprofile(data)
        })
    }, []);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        settangible({
            ...tangible,
            [name]: value,
        });
    };

    const addTangible = (e) => {
        e.preventDefault()

        axios.post("investment/tangible/create/", tangible, config())
            .then(res => {
                console.log(res.data)
                res.data.response === 1 ? navigate(`/adminuser/farmers/tangible/${id}`) : alert(res.data.message)
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
                    <ContentHeader title="Add Tangible Assets" />

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
                                                <Link to={{ pathname: `/adminuser/farmers/tangible/${id}` }} className="btn btn-sm btn-primary float-right"><i class="fa fa-arrow-left"></i> Go Back</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-body'>
                                        <form onSubmit={addTangible} >
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Name</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="name" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Cost</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="cost" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Disposal</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="disposal" />
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

export default Adminaddtangible;
