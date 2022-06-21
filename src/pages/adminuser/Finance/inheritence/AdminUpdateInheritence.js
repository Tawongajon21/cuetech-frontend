import React, { useEffect, useState } from 'react';
import ContentHeader from "../../../components/ContentHeader";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { config, ERROR_MESSAGE, getUserProfile } from '../../../../functions/AdminHelper';
import axios from 'axios';

const Adminupdateinheritence = () => {
    const { id, uid } = useParams()
    const navigate = useNavigate()
    const [profile, setprofile] = useState([]);
    const [inheritence, setinheritence] = useState([]);
    useEffect(() => {
        getUserProfile(uid).then((data) => {
            setprofile(data)
        })
        getInheritence()
    }, []);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setinheritence({
            ...inheritence,
            [name]: value,
        });
    };

    const getInheritence = () => {
        axios.get(`finance/inheritence/single/${id}/${uid}/`, config())
            .then(res => {
                console.log(res.data)
                res.data.response === 1 ? setinheritence(res.data.result) : alert(res.data.message)
            })
            .catch(err => {
                alert(ERROR_MESSAGE)
            })
    }
    const updateInheritence = (e) => {
        e.preventDefault()

        axios.put(`finance/inheritence/update/${id}/${uid}/`, inheritence, config())
            .then(res => {
                console.log(res.data)
                res.data.response === 1 ? navigate(`/adminuser/farmers/inheritence/${uid}`) : alert(res.data.message)
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
                    <ContentHeader title="Update Inheritence" />

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
                                                <Link to={{ pathname: `/adminuser/farmers/inheritence/${uid}` }} className="btn btn-sm btn-primary float-right"><i class="fa fa-arrow-left"></i> Go Back</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-body'>
                                        <form onSubmit={updateInheritence}>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Item name</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={inheritence.item_name} name="item_name" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Value</label>
                                                    <input type="number" class="form-group form-control" onChange={handleInputChange} value={inheritence.item_value} name="item_value" />
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

export default Adminupdateinheritence;
