import React, { useEffect, useState } from 'react';




import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { config, getData } from '../../../../../functions/AdminHelper';
import { formatDate, initTable } from '../../../../../functions/Helper';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';
import ContentHeader from '../../../../components/ContentHeader';

//import { config, formatDate, initTable } from '../../../../functions/Helper'

function OwnerCapital() {
    const { id } = useParams();
    const [capital, setcapital] = useState([]);
    const [profile, setprofile] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        getCapital();
        initTable();
    }, [])
    const getCapital = () => {
        getData('finance/capital/all/0/').then(data=>{
            setcapital(data.result);
        })
    }
   

 
    const role = localStorage.getItem("role");
  

        return (
            <div className="wrapper">
                <Navbar />
                <Sidebar />
                <div className="content-wrapper">
                    <ContentHeader title="Owner Capital" />

                    <section className="content">
                        <div className="container-fluid">
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className="card">
                                        <div className="card-header bg-secondary">
                                            <div className='row'>
                                                <div className='col-md-6'>
                                              {/**<h5>{profile.full_name}</h5> */}  
                                              Tariro Chimutopo    
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="float-right button-group">
                                                        <Link to={{ pathname: `/adminuser/farmers/details/${id}` }} className="btn btn-sm btn-light mr-2"><i class="fa fa-arrow-left"></i> Go Back</Link>
                                                        <Link to={{ pathname: `/adminuser/farmers/capital/add/${id}` }} className="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> Add New</Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Amount (USD)</th>
                                                        <th>Type</th>
                                                        <th>Date Created</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                         
{capital.map((cap) => (
                                                        <tr>
                                                            <td>{cap.amount}</td>
                                                            <td>{cap.capital_type}</td>
                                                            <td>{formatDate(cap.date_added)}</td>
                                                            <td className='text-center'>
                                                                <div className='button-group'>
                                                                    <Link to={{ pathname:  `/farmers/finance/ownercapital-update/${cap.id}/0`
                                                                    
                                                                   
                                                                
                                                                }} className="btn btn-sm btn-info mr-2"> <i className="fa fa-edit"></i></Link>
                        
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))} 
                                                  
                                                 {/* <tr>
                                                            <td>amount</td>
                                                            <td>capital_type</td>
                                                            <td>2020/02/21</td>
                                                            <td className='text-center'>
                                                                <div className='button-group'>
                                                                    <Link to='/' className="btn btn-sm btn-info mr-2"> <i className="fa fa-edit"></i></Link>
                                                                    <button className="btn btn-sm btn-danger"> <i className="fa fa-trash"></i></button>
                                                                </div>
                                                            </td>
                                                        </tr> */}
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Amount</th>
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
            </div>);
  
}

export default OwnerCapital