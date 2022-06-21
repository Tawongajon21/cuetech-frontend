import React, { useState } from 'react';
import { config } from '../../../../../functions/Helper';
import ContentHeader from '../../../../components/ContentHeader';
import SideBar from '../../../components/Sidebar';
import Navbar from '../../../components/Navbar';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ERROR_MESSAGE, postData } from '../../../../../functions/AdminHelper';
const Addorchardsdata = () => {
    const { id, uid } = useParams()
    const navigate = useNavigate()
    const [orchardsdata, setorchardsdata] = useState({
        info_type: "N/A",
        price: "N/A",
        quantity: "N/A",
        orchard: id
    });


    const addOrchardsData = (e) => {
        e.preventDefault()
        const url = `operations/orchards/info/create/`;
        postData(url, orchardsdata).then((data) => {
            data.response === 1 ? navigate(`/adminuser/farmers/orchard/data/${id}/${uid}`) : alert(ERROR_MESSAGE)
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setorchardsdata({
            ...orchardsdata,
            [name]: value,
        });
    };
    return (
        <div className="wrapper">
            <Navbar />
            <SideBar />
            <div className="content-wrapper">
                <ContentHeader title="Add Orchards Data" />

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
                                                    <Link to={{ pathname: `/adminuser/farmers/orchards/add/${id}` }} className="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> Add New</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={addOrchardsData}>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Info Type</label>
                                                    <select name="info_type" id="" className="form-control form-group" onChange={handleInputChange}>
                                                        <option value="">Please Select Info Type</option>
                                                        <option value="Harvested">Harvested</option>
                                                        <option value="Sold">Sold</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Quantity</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="quantity" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Price</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="price" />
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

export default Addorchardsdata;
