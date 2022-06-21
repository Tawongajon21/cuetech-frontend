import React, { useState, useEffect } from 'react';
import ContentHeader from '../../../../components/ContentHeader';
import SideBar from '../../../components/Sidebar';
import Navbar from '../../../components/Navbar';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ERROR_MESSAGE, getData, updateData } from '../../../../../functions/AdminHelper';
const Updateplantsotherexpenses = () => {
    const { id, uid } = useParams()
    const navigate = useNavigate()
    const [plantsotherexpense, setplantsotherexpense] = useState([]);


    const updatePlantsOtherExpense = (e) => {
        e.preventDefault()
        const url = `operations/plants/otherexpenses/update/${id}/`;
        updateData(url, plantsotherexpense).then((data) => {
            data.response === 1 ? navigate(`/adminuser/farmers/plants/${uid}`) : alert(ERROR_MESSAGE)
        })
    }

    useEffect(() => {
        getPlantsExpense()
    }, []);

    const getPlantsExpense = () => {
        const url = `operations/plants/otherexpenses/single/${id}/`;
        getData(url).then((data) => {
            data.response === 1 ? setplantsotherexpense(data.result) : alert(data.message)
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setplantsotherexpense({
            ...plantsotherexpense,
            [name]: value,
        });
    };
    return (
        <div className="wrapper">
            <Navbar />
            <SideBar />
            <div className="content-wrapper">
                <ContentHeader title="Update Plants Other Expenses" />

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
                                        <form onSubmit={updatePlantsOtherExpense}>
                                            <div class="row">

                                                <div class="col-md-6">
                                                    <label for="">Expense Type</label>
                                                    <select name="expense_type" id="" className="form-control form-group" onChange={handleInputChange} value={plantsotherexpense.expense_type}>
                                                        <option value="">Please Select Item</option>
                                                        <option value="Hired Labour Cost">Hired Labour Cost</option>
                                                        <option value="Hired Labour Machinery">Hired Labour Machinery</option>
                                                        <option value="Others">Others</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Cost</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={plantsotherexpense.cost} name="cost" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label for="">Description</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={plantsotherexpense.description} name="description" />
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

export default Updateplantsotherexpenses;
