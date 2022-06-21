import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
//import { config, ERROR_MESSAGE, getUserProfile } from '../../../../functions/AdminHelper';

import axios from 'axios';


import { config, formatDate } from '../../../../../functions/Helper';
import { deleteData, ERROR_MESSAGE, getData, getUserProfile } from '../../../../../functions/AdminHelper';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';
import ContentHeader from '../../../../components/ContentHeader';

function Inheritance() {
    const { id } = useParams();
    
    const [inheritence, setinheritence] = useState([]);
    const [profile, setprofile] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        getInheritence();
        getUserProfile(id).then((data) => {
            setprofile(data)
        })
    }, []);
    const getInheritence = () => {
        getData(`finance/inheritence/all/0/`).then(data=>{
            setinheritence(data.result)
        })
     
 }
           
console.log(inheritence);
    
    const deleteInheritence = (cid) => {
        const ask = window.confirm("Are you sure you want to delete this record ?")
        if (ask === true) {
            axios.delete(`finance/inheritence/delete/${cid}/${id}/`, config())
                .then(res => {
                    if (res.data.response === 1) {
                        alert(res.data.message)
                        getInheritence();
                    } else {
                        alert(res.data.message + ". If This messages persists contact admin");
                    }
                })
                .catch(err => {
                    alert("Something Went wrong Please Try again . If This messages persists contact admin");
                })
        }
        else {
            alert("Record Not Deleted")
        }
    }
    const role = localStorage.getItem("role");

  return (
    <div className="wrapper">
                <Navbar />
                <Sidebar />
                <div className="content-wrapper">
                    <ContentHeader title="Inheritance" />

                    <section className="content">
                        <div className="container-fluid">
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className="card">
                                        <div className="card-header">
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                 <h5>profile.full_name</h5>  
                                                
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="float-right">
                                                     {
                                                       /**   <Link to={{ pathname: `/adminuser/farmers/details/${id}` }} className="btn btn-sm btn-success mr-2"><i class="fa fa-arrow-left"></i> Go Back</Link>

                                                        <Link to={{ pathname: `/adminuser/farmers/inheritence/add/${id}` }} className="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> Add New</Link>*/
                                                     }
                                                       <Link to={{ pathname: `/adminuser/farmers/details/` }} className="btn btn-sm btn-success mr-2"><i class="fa fa-arrow-left"></i> Go Back</Link>


                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Item Name</th>
                                                        <th>Item Value (USD)</th>
                                                        <th>Date Created</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
    {inheritence.map((inh) => (
                                                        <tr>
                                                            <td>{inh.item_name}</td>
                                                            <td>{inh.item_value}</td>
                                                            <td>{formatDate(inh.date_added)}</td>
                                                            <td className='text-center'>
                                                                <div className='button-group'>
                                                              
                                                                    <Link to={{ pathname: `/farmers/finance/inheritance-update/${inh.id}/0` }} className="btn btn-sm btn-info mr-2"> <i className="fa fa-edit"></i></Link>
                                                                  
                                     
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))} 



                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Item Name</th>
                                                        <th>Item Value (USD)</th>
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
        );
  
}

export default Inheritance