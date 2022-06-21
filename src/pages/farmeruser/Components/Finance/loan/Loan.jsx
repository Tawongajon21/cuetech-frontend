import React, { useEffect, useState } from 'react';


import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { config, formatDate } from '../../../../../functions/Helper';
import { ERROR_MESSAGE, getData, getUserProfile } from '../../../../../functions/AdminHelper';
import ContentHeader from '../../../../components/ContentHeader';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';

//import { config, ERROR_MESSAGE, getUserProfile } from '../../../../functions/AdminHelper';

function Loan() {
    const { id } = useParams();
    const [loan, setloan] = useState([]);
    const [profile, setprofile] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        getLoan();
        getUserProfile(id).then((data) => {
            setprofile(data)
        })
    }, []);
    const getLoan = () => {

        getData(`finance/loan/all/0/`).then(data=>{
          
            setloan(data.result)
        })
       
    }
  return (
    <div className="wrapper">
    <Navbar />
    <Sidebar />
    <div className="content-wrapper">
        <ContentHeader title="Loan" />

        <section className="content">
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="card">
                            <div className="card-header">
                                <div className='row'>
                                    <div className='col-md-6'>
                                {/**<h5>{profile.full_name}</h5> */}  
                                <h5>Tariro Chimutopo</h5>      
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="float-right">
                                            <Link to={{ pathname: `/adminuser/farmers/details/` }} className="btn btn-sm btn-success mr-2"><i class="fa fa-arrow-left"></i> Go Back</Link>

                                            <Link to={{ pathname: `/adminuser/farmers/loan/add/` }} className="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> Add New</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Principal</th>
                                            <th>Amount (USD)</th>
                                            <th>Interest Rate (%)</th>
                                            <th>Duration (Months)</th>
                                            <th>Payment Plan</th>
                                            <th>Type</th>
                                            <th>Date Created</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
   {loan.map((ln) => (
                                            <tr>
                                                <td>{ln.principal}</td>
                                                <td>{ln.amount}</td>
                                                <td>{ln.interest_rate}</td>
                                                <td>{ln.duration}</td>
                                                <td>{ln.payment_plan}</td>
                                                <td>{ln.capital_type}</td>
                                                <td>{formatDate(ln.date_added)}</td>
                                                <td className='text-center'>
                                                    <div className='button-group'>
                                                        <Link to={{ pathname: `/farmers/finance/loan-update/${ln.id}/1` }} className="btn btn-sm btn-info mr-2"> <i className="fa fa-edit"></i></Link>
                                                        <button onClick={(e) => deleteLoan(ln.id)} className="btn btn-sm btn-danger"> <i className="fa fa-trash"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}


                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Principal</th>
                                            <th>Amount (USD)</th>
                                            <th>Interest Rate</th>
                                            <th>Duration</th>
                                            <th>Payment Plan</th>
                                            <th>Type</th>
                                            <th>Date Created</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                </table>
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

export default Loan