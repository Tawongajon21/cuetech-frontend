import React, { useEffect, useState } from 'react';
import ContentHeader from "../../../components/ContentHeader";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { config, ERROR_MESSAGE, getUserProfile } from '../../../../functions/AdminHelper';
import axios from 'axios';

const Adminaddorchards = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [profile, setprofile] = useState([]);
    const [orchards, setorchards] = useState({
        name: "N/A",
        variety: "N/A",
        area_planted: "N/A",
        owner: id
    });
    useEffect(() => {
        getUserProfile(id).then((data) => {
            setprofile(data)
        })
    }, []);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setorchards({
            ...orchards,
            [name]: value,
        });
    };

    const addOchards = (e) => {
        e.preventDefault()

        axios.post("operations/orchards/create/", orchards, config())
            .then(res => {
                console.log(res.data)
                res.data.response === 1 ? navigate(`/adminuser/farmers/orchard/${id}`) : alert(res.data.message)
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
                    <ContentHeader title="Add Ochards" />

                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 card mb-3">
                                    <div className="card-header">
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <h5>{profile.full_name}</h5>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='card-body'>
                                        <form onSubmit={addOchards} >
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Name</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="name" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Variety /Hybrid</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="variety" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Area Planted</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="area_planted" />
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

export default Adminaddorchards;
