import React, { useState } from 'react';
import { config } from '../../../../../functions/Helper';
import ContentHeader from '../../../../components/ContentHeader';
import SideBar from '../../../components/Sidebar';
import Navbar from '../../../components/Navbar';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ERROR_MESSAGE, postData } from '../../../../../functions/AdminHelper';

const Addlivestockexpenses = () => {
    const { id, uid } = useParams()
    const navigate = useNavigate()
    const [livestockdataexpense, setlivestockdataexpense] = useState({
        item: "N/A",
        name: "N/A",
        cost: "N/A",
        quantity_bought: "N/A",
        quantity_used: "N/A",
        livestock: id
    });

    const url = `operations/livestock/expenses/create/`;
    const addLivestockdataExpense = (e) => {
        e.preventDefault()
        postData(url, livestockdataexpense).then((data) => {
            data.response === 1 ? navigate(`/adminuser/farmers/livestock/data/${id}/${uid}`) : alert(ERROR_MESSAGE)
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setlivestockdataexpense({
            ...livestockdataexpense,
            [name]: value,
        });
    };
    return (
        <div className="wrapper">
            <Navbar />
            <SideBar />
            <div className="content-wrapper">
                <ContentHeader title="Add Livestock Expense" />

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
                                        <form onSubmit={addLivestockdataExpense}>
                                            <div class="row">

                                                <div class="col-md-6">
                                                    <label for="">Expense Type</label>
                                                    <select name="item" id="" className="form-control form-group" onChange={handleInputChange}>
                                                        <option value="">Please Select Item</option>
                                                        <option value="Feed">Feed</option>
                                                        <option value="Supplements">Supplements</option>
                                                        <option value="Vaccines / Drugs">Vaccines / Drugs</option>
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

export default Addlivestockexpenses;
