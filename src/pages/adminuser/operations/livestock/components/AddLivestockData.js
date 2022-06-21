import React, { useState } from 'react';
import { config } from '../../../../../functions/Helper';
import ContentHeader from '../../../../components/ContentHeader';
import SideBar from '../../../components/Sidebar';
import Navbar from '../../../components/Navbar';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ERROR_MESSAGE, postData } from '../../../../../functions/AdminHelper';
const Addlivestockdata = () => {
    const { id, uid } = useParams()
    const navigate = useNavigate()
    const [livestockdata, setlivestockdata] = useState({
        source: "N/A",
        info_type: "N/A",
        cost: "N/A",
        transport: "N/A",
        quantity: "N/A",
        livestock: id
    });

    const url = `operations/livestock/info/create/`;
    const addLivestockData = (e) => {
        e.preventDefault()
        postData(url, livestockdata).then((data) => {
            data.response === 1 ? navigate(`/adminuser/farmers/livestock/data/${id}/${uid}`) : alert(ERROR_MESSAGE)
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setlivestockdata({
            ...livestockdata,
            [name]: value,
        });
    };
    return (
        <div className="wrapper">
            <Navbar />
            <SideBar />
            <div className="content-wrapper">
                <ContentHeader title="Add Livestock Data" />

                <section className="content">
                    <div className="container-fluid">
                        <div className='row'>
                            <div className='col-md-12 mb-2'>
                                <div className="card">
                                    <div className="card-header">
                                        <div className='row'>
                                            <div className='col-md-6'>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="float-right">
                                                    <Link to={{ pathname: `/adminuser/farmers/livestock/data/${id}/${uid}` }} className="btn btn-sm btn-primary"><i class="fa fa-arrow-left"></i> Go Back</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={addLivestockData}>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Source</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="source" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Info Type</label>
                                                    <select name="info_type" id="" className="form-control form-group" onChange={handleInputChange}>
                                                        <option value="">Please Select Info Type</option>
                                                        <option value="Bought">Bought</option>
                                                        <option value="Slaughtered">Slaughtered</option>
                                                        <option value="Sold">Sold</option>
                                                        <option value="New Borns">New Borns</option>
                                                        <option value="Deceased Youngones">Deceased Youngones</option>
                                                        <option value="Deceased Old">Deceased Old</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Quantity</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="quantity" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Cost</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="cost" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Transport Cost</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="transport" />
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
}

export default Addlivestockdata;
