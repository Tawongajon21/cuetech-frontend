import React, { useState, useEffect } from 'react';
import ContentHeader from '../../../../components/ContentHeader';
import SideBar from '../../../components/Sidebar';
import Navbar from '../../../components/Navbar';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ERROR_MESSAGE, getData, updateData } from '../../../../../functions/AdminHelper';

const Updateorchardsdata = () => {
    const { id, uid } = useParams()
    const navigate = useNavigate()
    const [orchardsdata, setorchardsdata] = useState([]);


    const updateOrchardsData = (e) => {
        e.preventDefault()
        const url = `operations/orchards/info/update/${id}/`;
        updateData(url, orchardsdata).then((data) => {
            data.response === 1 ? navigate(`/adminuser/farmers/orchard/data/${id}/${uid}`) : alert(ERROR_MESSAGE)
        })
    }

    useEffect(() => {
        getOrchardsdata()
    }, []);

    const getOrchardsdata = () => {
        const url = `operations/orchards/info/single/${id}/`;
        getData(url).then((data) => {
            data.response === 1 ? setorchardsdata(data.result) : alert(data.message)
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
                <ContentHeader title="Update Orchards Data" />

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
                                        <form onSubmit={updateOrchardsData}>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Info Type</label>
                                                    <select name="info_type" id="" className="form-control form-group" onChange={handleInputChange} value={orchardsdata.info_type}>
                                                        <option value="">Please Select Info Type</option>
                                                        <option value="Harvested">Harvested</option>
                                                        <option value="Sold">Sold</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Quantity</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={orchardsdata.quantity} name="quantity" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Price</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={orchardsdata.price} name="price" />
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

export default Updateorchardsdata;
