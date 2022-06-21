import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ERROR_MESSAGE, getUserProfile } from '../../../../../functions/AdminHelper'
import { config } from '../../../../../functions/Helper'
import ContentHeader from '../../../../components/ContentHeader'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar';


function SavingsUpdate() {
    const { id, uid } = useParams()
    const navigate = useNavigate()
    const [profile, setprofile] = useState([]);
    const [savings, setsavings] = useState([]);
    useEffect(() => {
        getUserProfile(id).then((data) => {
            setprofile(data)
        })
        getSavings()
    }, []);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setsavings({
            ...savings,
            [name]: value,
        });
    };
    const updateSavings = (e) => {
        e.preventDefault()

        axios.put(`investment/savings/update/${id}/${uid}/`, savings, config())
            .then(res => {
                console.log(res.data)
                res.data.response === 1 ? navigate(`/adminuser/farmers/savings/${uid}`) : alert(res.data.message)
            })
            .catch(err => {
                alert(ERROR_MESSAGE)
            })
    }
    const getSavings = () => {
        axios.get(`investment/savings/single/${id}/${uid}/`, config())
            .then(res => {
                res.data.response === 1 ? setsavings(res.data.result) : alert(res.data.message)
            })
            .catch(err => {
                alert(ERROR_MESSAGE)
            })
    }
    const role = localStorage.getItem("role");
    if (role === "3" ) {
        return (
            <div className="wrapper">
                        <Navbar />
                        <Sidebar />
                        <div className="content-wrapper">
                            <ContentHeader title="Update Savings" />
        
                            <section className="content">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-12 card mb-3">
                                            <div className="card-header">
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        {
                                                            /** <h5>{profile.full_name}</h5>*/
                                                        }
                                                        <h5>profile.full_name</h5>
                                                    </div>
                                                    <div className='col-md-6 float-right'>
                                                        <Link to={{ pathname: `/adminuser/farmers/savings/${uid}` }} className="btn btn-sm btn-primary float-right"><i class="fa fa-arrow-left"></i> Go Back</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='card-body'>
                                                <form onSubmit={updateSavings}>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label for="">Amount</label>
                                                            <input type="text" class="form-group form-control" name="amount" onChange={handleInputChange} value={savings.amount} />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="">Type</label>
                                                            <select name="savings_type" id="" class="form-group form-control" onChange={handleInputChange} value={savings.savings_type}>
                                                                <option value="">PLEASE SELECT TYPE</option>
                                                                <option value="Addition">Addition</option>
                                                                <option value="Withdrawal">Withdrawal</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label for="">Interest Rate</label>
                                                            <input type="text" class="form-group form-control" name="interest_rate" onChange={handleInputChange} value={savings.interest_rate} />
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <button class="btn-sm btn btn-primary" type="submit"> <i className='fa fa-plus-circle'></i> Submit</button>
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
 
}

export default SavingsUpdate