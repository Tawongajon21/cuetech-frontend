import React, { useState, useEffect } from 'react';
import ContentHeader from '../../../../components/ContentHeader';
import SideBar from '../../../components/Sidebar';
import Navbar from '../../../components/Navbar';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ERROR_MESSAGE, getData, updateData } from '../../../../../functions/AdminHelper';
const Updateorchardsexpenses = () => {
    const { id, uid } = useParams()
    const navigate = useNavigate()
    const [orchardsexpense, setorchardsexpense] = useState([]);


    const updateOrchardsExpense = (e) => {
        e.preventDefault()
        const url = `operations/orchards/expenses/update/${id}/`;
        updateData(url, orchardsexpense).then((data) => {
            data.response === 1 ? navigate(`/adminuser/farmers/orchard/${uid}`) : alert(ERROR_MESSAGE)
        })
    }

    useEffect(() => {
        getOrchardsExpense()
    }, []);

    const getOrchardsExpense = () => {
        const url = `operations/orchards/expenses/single/${id}/`;
        getData(url).then((data) => {
            data.response === 1 ? setorchardsexpense(data.result) : alert(data.message)
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setorchardsexpense({
            ...orchardsexpense,
            [name]: value,
        });
    };
    return (
        <div className="wrapper">
            <Navbar />
            <SideBar />
            <div className="content-wrapper">
                <ContentHeader title="Update Orchards Expense" />

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
                                                    <Link to={{ pathname: `/adminuser/farmers/orchard/add/${id}` }} className="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> Add New</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={updateOrchardsExpense}>
                                            <div class="row">

                                                <div class="col-md-6">
                                                    <label for="">Expense Type</label>
                                                    <select name="item" id="" className="form-control form-group" onChange={handleInputChange} value={orchardsexpense.item}>
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
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={orchardsexpense.name} name="name" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label for="">Cost</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={orchardsexpense.cost} name="cost" />
                                                </div>
                                                <div class="col-md-4">
                                                    <label for="">Quantity Bought</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={orchardsexpense.quantity_bought} name="quantity_bought" />
                                                </div>
                                                <div class="col-md-4">
                                                    <label for="">Quantity Used</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={orchardsexpense.quantity_used} name="quantity_used" />
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

export default Updateorchardsexpenses;
