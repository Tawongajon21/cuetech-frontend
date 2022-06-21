import React, { useEffect, useState } from 'react'
import { config, formatDate } from '../../../../../functions/Helper'


import Navbar from '../../Navbar'
import axios from 'axios';
import ContentHeader from '../../../../components/ContentHeader';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../../Sidebar';
import { getUserProfile } from '../../../../../functions/AdminHelper';

function Plants() {
    const { id } = useParams();
    const [plants, setplants] = useState([]);
    const [profile, setprofile] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {

        getUserProfile(id).then((data) => {
            setprofile(data)
        })
        getPlants();
    }, []);
    const getPlants = () => {
        axios.get(`operations/plants/all/${id}/`, config())
            .then(res => {
                console.log(res.data)
                res.data.response === 1 ? setplants(res.data.result) : alert(res.data.message + ". If This messages persists contact admin")
            })
            .catch(err => {
                console.log(err)
            })
    }
    const deletePlants = (cid) => {
        const ask = window.confirm("Are you sure you want to delete this record ?")
        if (ask === true) {
            axios.delete(`operations/plants/delete/${cid}/${id}/`, config())
                .then(res => {
                    if (res.data.response === 1) {
                        alert(res.data.message)
                        getPlants();
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
                <ContentHeader title="Plants" />
        
                <section className="content">
                    <div className="container-fluid">
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="card">
                                    <div className="card-header">
                                        <div className='row'>
                                            <div className='col-md-6'>
                                 <h5>{profile.full_name}</h5>
                                              
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="float-right">
                                                {
        // <Link to={{ pathname: `/adminuser/farmers/plants/add/${id}` }} className="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> Add New</Link>
                                                }
                                                 <Link to={{ pathname: `/adminuser/farmers/plants/add/` }} className="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> Add New</Link>
                                                </div>
                                            </div>
        
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <table className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Variety</th>
                                                    <th>Area Planted (Ha)</th>
                                                    <th>Seedlins Died</th>
                                                    <th>Date Planted</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
         {plants.map((tan) => (
                                                    <tr>
                                                        <td>{tan.name}</td>
                                                        <td>{tan.variety}</td>
                                                        <td>{tan.area_planted}</td>
                                                        <td>{tan.seedlings_died}</td>
                                                        <td>{formatDate(tan.date_planted)}</td>
                                                        <td className='text-center'>
                                                            <div className='button-group'>
                                                               
                                                                <Link to={{ pathname:`farmeruser/farmers/operations/plants/data/${tan.id}/${id}`  }} className="btn btn-sm btn-info mr-2"> View Data</Link>
        
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
        
        
                                            
      
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Variety</th>
                                                    <th>Area Planted (Ha)</th>
                                                    <th>Seedlins Died</th>
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

export default Plants