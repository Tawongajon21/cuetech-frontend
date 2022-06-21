import React, { useState, useEffect } from 'react';
import ContentHeader from '../../../../components/ContentHeader';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ERROR_MESSAGE, getData, updateData  } from '../../../../../functions/AdminHelper';


function UpdateOtherLivestockExpenses() {
    const { id, uid } = useParams()
    const navigate = useNavigate()
    const [livestockotherexpense, setlivestockotherexpense] = useState([]);


    const updateLivestockOtherExpense = (e) => {
        e.preventDefault()
        const url = `operations/livestock/otherexpenses/update/${id}/`;
        updateData(url, livestockotherexpense).then((data) => {
            data.response === 1 ? navigate(`/adminuser/farmers/livestock/${uid}`) : alert(ERROR_MESSAGE)
        })
    }

    useEffect(() => {
        getLivestockExpense()
    }, []);

    const getLivestockExpense = () => {
        const url = `operations/livestock/otherexpenses/single/${id}/`;
        getData(url).then((data) => {
            data.response === 1 ? setlivestockotherexpense(data.result) : alert(data.message)
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
    <Sidebar />
    <div className="content-wrapper">
        <ContentHeader title="Update Livestock Other Expenses" />

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
                                <form onSubmit={updateLivestockOtherExpense}>
                                    <div class="row">

                                        <div class="col-md-6">
                                            <label for="">Expense Type</label>
                                            <select name="expense_type" id="" className="form-control form-group" onChange={handleInputChange} value={livestockotherexpense.expense_type}>
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
                                            <input type="text" class="form-group form-control" onChange={handleInputChange} value={livestockotherexpense.cost} name="cost" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label for="">Description</label>
                                            <input type="text" class="form-group form-control" onChange={handleInputChange} value={livestockotherexpense.description} name="description" />
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

export default UpdateOtherLivestockExpenses