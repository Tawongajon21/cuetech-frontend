import React, { useState } from 'react';
import { config } from '../../../../../functions/Helper';
import ContentHeader from '../../../../components/ContentHeader';
import SideBar from '../../../components/Sidebar';
import Navbar from '../../../components/Navbar';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ERROR_MESSAGE, postData } from '../../../../../functions/AdminHelper';

const Addlivestockotherexpenses = () => {
    const { id, uid } = useParams()
    const navigate = useNavigate()
    const [livestockotherexpense, setlivestockotherexpense] = useState({
        expense_type: "N/A",
        description: "N/A",
        cost: "N/A",
        livestock: id
    });


    const addLivestockOtherExpense = (e) => {
        e.preventDefault()
        const url = `operations/livestock/otherexpenses/create/`;
        postData(url, livestockotherexpense).then((data) => {
            data.response === 1 ? navigate(`/adminuser/farmers/livestock/data/${id}/${uid}`) : alert(ERROR_MESSAGE)
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setlivestockotherexpense({
            ...livestockotherexpense,
            [name]: value,
        });
    };
    return (
        <div className="wrapper">
            <Navbar />
            <SideBar />
            <div className="content-wrapper">
                <ContentHeader title="Add Livestock Other Expenses" />

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
                                        <form onSubmit={addLivestockOtherExpense}>
                                            <div class="row">

                                                <div class="col-md-6">
                                                    <label for="">Expense Type</label>
                                                    <select name="expense_type" id="" className="form-control form-group" onChange={handleInputChange}>
                                                        <option value="">Please Select Item</option>
                                                        <option value="Vet Service Fee">Vet Service Fee</option>
                                                        <option value="Consultation Fee">Consultation Fee</option>
                                                        <option value="Hired Labour Cost">Hired Labour Cost</option>
                                                        <option value="Hired Labour Machinery">Hired Labour Machinery</option>
                                                        <option value="Others">Others</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Cost</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="cost" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label for="">Description</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} name="description" />
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

export default Addlivestockotherexpenses;
