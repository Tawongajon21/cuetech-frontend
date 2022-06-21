import React, { useState } from 'react';
import { config } from '../../../../../functions/Helper';
import ContentHeader from '../../../../components/ContentHeader';
import SideBar from '../../../components/Sidebar';
import Navbar from '../../../components/Navbar';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ERROR_MESSAGE, postData } from '../../../../../functions/AdminHelper';

const Addplantsexpenses = () => {
    const { id, uid } = useParams()
    const navigate = useNavigate()
    const [plantsdataexpense, setplantsdataexpense] = useState({
        item: "N/A",
        name: "N/A",
        cost: "N/A",
        quantity_bought: "N/A",
        quantity_used: "N/A",
        plant: id
    });

    const url = `operations/plants/expenses/create/`;
    const addPlantsdataExpense = (e) => {
        e.preventDefault()
        postData(url, plantsdataexpense).then((data) => {
            data.response === 1 ? navigate(`/adminuser/farmers/plants/data/${id}/${uid}`) : alert(ERROR_MESSAGE)
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setplantsdataexpense({
            ...plantsdataexpense,
            [name]: value,
        });
    };
    return (
        <div className="wrapper">
            <Navbar />
            <SideBar />
            <div className="content-wrapper">
                <ContentHeader title="Add Plants Expense" />

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
                                                    <Link to={{ pathname: `/adminuser/farmers/plants/add/${id}` }} className="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> Add New</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={addPlantsdataExpense}>
                                            <div class="row">

                                                <div class="col-md-6">
                                                    <label for="">Expense Type</label>
                                                    <select name="item" id="" className="form-control form-group" onChange={handleInputChange}>
                                                        <option value="">Please Select Item</option>
                                                        <option value="Seed">Seed</option>
                                                        <option value="Basal Fertiliser">Basal Fertiliser</option>
                                                        <option value="Top Dressing">Top Dressing</option>
                                                        <option value="Herbicide">Herbicide</option>
                                                        <option value="Other Chemicals">Other Chemicals</option>
                                                        <option value="Packaging Materials">Packaging Materials</option>
                                                        <option value="Others">Others</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Name</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="name" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label for="">Cost</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="cost" />
                                                </div>
                                                <div class="col-md-4">
                                                    <label for="">Quantity Bought</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="quantity_bought" />
                                                </div>
                                                <div class="col-md-4">
                                                    <label for="">Quantity Used</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="quantity_used" />
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

export default Addplantsexpenses;
