import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { config } from '../../../../../functions/Helper'
import ContentHeader from '../../../../components/ContentHeader'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar';

function UpdateGeneralExpenses() {
  const navigate = useNavigate();
    const { id, uid } = useParams();
    const [generalexpenses, setgeneralexpenses] = useState([]);
    const [profile, setprofile] = useState([]);

    useEffect(() => {
        getFarmerProfile();
        getGeneralExpenses();
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setgeneralexpenses({
            ...generalexpenses,
            [name]: value,
        });
    };

    const handleUpdateGeneralExpenses = (e) => {
        e.preventDefault()
        axios.put(`operations/generalexpenses/update/${id}/${uid}/`, generalexpenses, config())
            .then(res => {
                console.log(res.data)
                res.data.response === 1 ? alert(res.data.message) : alert(res.data.message + ". If This messages persists contact admin")
                navigate(`/adminuser/farmers/generalexpenses/${uid}`)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getGeneralExpenses = () => {
        axios.get(`operations/generalexpenses/single/${id}/${uid}/`, config())
            .then(res => {
                console.log(res.data)
                if (res.data.response === 1) {
                    setgeneralexpenses(res.data.result);
                } else {
                    alert(res.data.message + ". If This messages persists contact admin");
                }
            })
            .catch(err => {
                alert("Something Went wrong Please Try again . If This messages persists contact admin");
            })
    }

    const getFarmerProfile = () => {
        axios.get(`users/get-user-profile/${uid}/`, config())
            .then(res => {
                if (res.data.response === 1) {
                    setprofile(res.data.result);
                } else {

                    alert(res.data.message + ". If This messages persists contact admin");
                }
            })
            .catch(err => {
                alert("Something Went wrong Please Try again . If This messages persists contact admin");
            })
    }
    const role = localStorage.getItem("role");
  return (
    <div className="wrapper">
    <Navbar />
    <Sidebar />
    <div className="content-wrapper">
        <ContentHeader title="Update General Expenses" />

        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 card mb-3">
                        <div className="card-header">
                            <div className='row'>
                                <div className='col-md-6'>
                                  {/**<h5>{profile.full_name}</h5> */}
                                    <h5>profile.full_name</h5>
                                </div>
                                <div className='col-md-6'>
                                    <div className="float-right">
                                        <Link to={{ pathname: `/adminuser/farmers/generalexpenses/${uid}` }} className="btn btn-sm btn-primary"><i class="fa fa-arrow-left"></i> Go Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={handleUpdateGeneralExpenses}>
                                <div class="row">

                                    <div class="col-md-6">
                                        <label for="">Item</label>
                                        <select name="item" id="" className="form-control form-group" onChange={handleInputChange} value={generalexpenses.item}>
                                            <option value="">Please Select Item</option>
                                            <option value="Labour / Wages Paid">Labour / Wages Paid</option>
                                            <option value="Electricity">Electricity</option>
                                            <option value="Telecommunication">Telecommunication</option>
                                            <option value="Water and Security">Water and Security</option>
                                            <option value="Fuel">Fuel</option>
                                            <option value="Hired Transport">Hired Transport</option>
                                            <option value="Maintanance">Maintanance</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="">Cost</label>
                                        <input type="text" class="form-group form-control" onChange={handleInputChange} value={generalexpenses.cost} name="cost" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label for="">Description</label>
                                        <input type="text" class="form-group form-control" onChange={handleInputChange} value={generalexpenses.description} name="description" />
                                    </div>
                                </div>


                                <div class="row">
                                    <button class="btn-sm btn btn-primary" type="submit"> <i className='fa fa-edit'></i> Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
  )
}

export default UpdateGeneralExpenses