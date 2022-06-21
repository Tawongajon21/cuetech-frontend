import React, { useEffect, useState } from 'react'
import { config, getUserProfile } from '../../../../../functions/AdminHelper'
import { formatDate } from '../../../../../functions/Helper'
import ContentHeader from '../../../../components/ContentHeader'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar';

import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
function Livestock() {
    const { id } = useParams();
    const [livestock, setlivestock] = useState([]);
    const [profile, setprofile] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {

        getUserProfile(id).then((data) => {
            setprofile(data)
        })
        getLivestock();
    }, []);
    const getLivestock = () => {
        axios.get(`operations/livestock/all/0/`, config())
            .then(res => {
                console.log(res.data)
                res.data.response === 1 ? setlivestock(res.data.result) : alert(res.data.message + ". If This messages persists contact admin")
            })
            .catch(err => {
                console.log(err)
            })
    }
    const deleteLivestock = (cid) => {
        const ask = window.confirm("Are you sure you want to delete this record ?")
        if (ask === true) {
            axios.delete(`operations/livestock/delete/${cid}/${id}/`, config())
                .then(res => {
                    if (res.data.response === 1) {
                        alert(res.data.message)
                        getLivestock();
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
    if (role === "3" ) {
        return (
            <div className="wrapper">
            <Navbar />
            <Sidebar />
            <div className="content-wrapper">
                <ContentHeader title="Livestock" />
        
                <section className="content">
                    <div className="container-fluid">
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="card">
                                    <div className="card-header">
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <h5>full_name</h5>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="float-right">
                                                    <Link to={{ pathname: `/adminuser/farmers/details/$` }} className="btn btn-sm btn-success mr-2"><i class="fa fa-arrow-left"></i> Go Back</Link>
        
                                                    <Link to={{ pathname: `/adminuser/farmers/livestock/add/$` }} className="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> Add New</Link>
                                                </div>
                                            </div>
        
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <table className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Variety / Hybrid</th>
                                                    <th>Date Created</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
          {livestock.map((tan) => (
                                                    <tr>
                                                        <td>{tan.name}</td>
                                                        <td>{tan.variety}</td>
                                                        <td>{formatDate(tan.date_created)}</td>
                                                        <td className='text-center'>
                                                            <div className='button-group'>
                                                                <Link to={{ pathname: `/farmeruser/farmers/livestock/data/${tan.id}/${id}` }} className="btn btn-sm btn-info mr-2"> View Data</Link>
                                                                
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
        
        
                                                      
                                              
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Variety / Hybrid</th>
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
 
}

export default Livestock