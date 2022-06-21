import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ERROR_MESSAGE, getUserProfile } from '../../../../../functions/AdminHelper';
import { config } from '../../../../../functions/Helper';
import ContentHeader from '../../../../components/ContentHeader'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar';

function TangibleUpdate() {
    const { id, uid } = useParams()
    const navigate = useNavigate()
    const [profile, setprofile] = useState([]);
    const [tangible, settangible] = useState([]);
    useEffect(() => {
        getUserProfile(uid).then((data) => {
            setprofile(data)
        })
        getTangible()
    }, []);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        settangible({
            ...tangible,
            [name]: value,
        });
    };
    const updateTangible = (e) => {
        e.preventDefault()

        axios.put(`investment/tangible/update/${id}/${uid}/`, tangible, config())
            .then(res => {
                console.log(res.data)
                res.data.response === 1 ? navigate(`/adminuser/farmers/tangible/${uid}`) : alert(res.data.message)
            })
            .catch(err => {
                alert(ERROR_MESSAGE)
            })
    }
    const getTangible = () => {
        axios.get(`investment/tangible/single/${id}/${uid}/`, config())
            .then(res => {
                res.data.response === 1 ? settangible(res.data.result) : alert(res.data.message)
            })
            .catch(err => {
                alert(ERROR_MESSAGE)
            })
    }
    const role = localStorage.getItem("role");
    if (role === "3" ) {
        return (
            <div className="wrapper">
            <Navbar />
            <Sidebar />
            <div className="content-wrapper">
                <ContentHeader title="Update Tangible Assets" />
        
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
                                            <Link to={{ pathname: `/adminuser/farmers/tangible/${uid}` }} className="btn btn-sm btn-primary float-right"><i class="fa fa-arrow-left"></i> Go Back</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-body'>
                                    <form onSubmit={updateTangible} >
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label for="">Name</label>
                                                <input type="text" class="form-group form-control" onChange={handleInputChange} value={tangible.name} name="name" />
                                            </div>
                                            <div class="col-md-6">
                                                <label for="">Cost</label>
                                                <input type="text" class="form-group form-control" onChange={handleInputChange} value={tangible.cost} name="cost" />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label for="">Disposal</label>
                                                <input type="text" class="form-group form-control" onChange={handleInputChange} value={tangible.disposal} name="disposal" />
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
        )
    }
  
  
}

export default TangibleUpdate