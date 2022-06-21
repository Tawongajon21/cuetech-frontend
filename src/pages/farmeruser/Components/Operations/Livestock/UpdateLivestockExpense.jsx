import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ERROR_MESSAGE, getData, updateData } from '../../../../../functions/AdminHelper';
import ContentHeader from '../../../../components/ContentHeader';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';

function UpdateLivestockExpense() {
    const { id, uid } = useParams()
    const navigate = useNavigate()
    const [livestockexpense, setlivestockexpense] = useState([]);


    const updateLivestockExpense = (e) => {
        e.preventDefault()
        const url = `operations/livestock/expenses/update/${id}/`;
        updateData(url, livestockexpense).then((data) => {
            data.response === 1 ? navigate(`/adminuser/farmers/livestock/${uid}`) : alert(ERROR_MESSAGE)
        })
    }

    useEffect(() => {
        getLivestockExpense()
    }, []);

    const getLivestockExpense = () => {
        const url = `operations/livestock/expenses/single/${id}/`;
        getData(url).then((data) => {
            data.response === 1 ? setlivestockexpense(data.result) : alert(data.message)
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setlivestockexpense({
            ...livestockexpense,
            [name]: value,
        });
    };
  return (
    <div className="wrapper">
            <Navbar />
            <Sidebar />
            <div className="content-wrapper">
                <ContentHeader title="Update Livestock Expense" />

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
                                                    <Link to={{ pathname: `/adminuser/farmers/livestock/${uid}` }} className="btn btn-sm btn-primary"><i class="fa fa-arrow-left"></i> Go Back</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={updateLivestockExpense}>
                                            <div class="row">

                                                <div class="col-md-6">
                                                    <label for="">Expense Type</label>
                                                    <select name="item" id="" className="form-control form-group" onChange={handleInputChange} value={livestockexpense.item}>
                                                        <option value="">Please Select Item</option>
                                                        <option value="Feed">Feed</option>
                                                        <option value="Supplements">Supplements</option>
                                                        <option value="Vaccines / Drugs">Vaccines / Drugs</option>
                                                        <option value="Others">Others</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Name</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={livestockexpense.name} name="name" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label for="">Cost</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={livestockexpense.cost} name="cost" />
                                                </div>
                                                <div class="col-md-4">
                                                    <label for="">Quantity Bought</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={livestockexpense.quantity_bought} name="quantity_bought" />
                                                </div>
                                                <div class="col-md-4">
                                                    <label for="">Quantity Used</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={livestockexpense.quantity_used} name="quantity_used" />
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
  )
}

export default UpdateLivestockExpense