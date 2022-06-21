import React, { useEffect, useState } from 'react';

import Sidebar from '../../Sidebar';
import Navbar from '../../Sidebar';

import { Link, useParams, useNavigate } from 'react-router-dom';


import axios from 'axios';
import ContentHeader from '../../../../components/ContentHeader';
import { config, getData, getUserProfile } from '../../../../../functions/AdminHelper';
import { formatDate } from '../../../../../functions/Helper';

function Intangible() {
  const { id } = useParams();
  const [intangible, setintangible] = useState([]);
  const [profile, setprofile] = useState([]);

  const navigate = useNavigate()
  useEffect(() => {

      getUserProfile(id).then((data) => {
          setprofile(data)
      })
   getIntangible()
  }, []);

  const getIntangible = () => {

    axios.get(`investment/intangible/all/0/`, config())
    .then(res => {
        console.log(res.data)
        res.data.response === 1 ? setintangible(res.data.result) : alert(res.data.message + ". If This messages persists contact admin")
    })
    .catch(err => {
        console.log(err)
    })
   
}



  const deleteIntangible = (cid) => {
      const ask = window.confirm("Are you sure you want to delete this record ?")
      if (ask === true) {
          axios.delete(`investment/intangible/delete/${cid}/${id}/`, config())
              .then(res => {
                  if (res.data.response === 1) {
                      alert(res.data.message)
                      getIntangible();
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
                        <ContentHeader title="Intangible Assets" />
    
                        <section className="content">
                            <div className="container-fluid">
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className="card">
                                            <div className="card-header">
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                      {/**   <h5>{profile.full_name}</h5>*/}
                                                        <h5>profile.full_name</h5>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className="float-right">
                                                          {
                                                            /**    <Link to={{ pathname: `/adminuser/farmers/details/${id}` }} className="btn btn-sm btn-success mr-2"><i class="fa fa-arrow-left"></i> Go Back</Link>
    
                                                            <Link to={{ pathname: `/adminuser/farmers/intangible/add/${id}` }} className="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> Add New</Link>*/
                                                          }
                                                            <Link to={{ pathname: `/adminuser/farmers/details/$` }} className="btn btn-sm btn-success mr-2"><i class="fa fa-arrow-left"></i> Go Back</Link>
    
                                                            <Link to={{ pathname: `/adminuser/farmers/intangible/add/` }} className="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> Add New</Link>
                                                        </div>
                                                    </div>
    
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <table className="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Cost</th>
                                                            <th>Disposal</th>
                                                            <th>Improvement</th>
                                                            <th>Date Created</th>
                                                            <th>Action </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
   {intangible.map((int) => (
                                                            <tr>
                                                                <td>{int.name}</td>
                                                                <td>{int.cost}</td>
                                                                <td>{int.disposal}</td>
                                                                <td>{int.improvement}</td>
                                                                <td>{formatDate(int.date_created)}</td>
                                                                <td className='text-center'>
                                                                    <div className='button-group'>
                                                                        <Link to={{ pathname: `/adminuser/farmers/intangible/update/${int.id}/${id}` }} className="btn btn-sm btn-info mr-2"> <i className="fa fa-edit"></i></Link>
                                                                        <button onClick={(e) => deleteIntangible(int.id)} className="btn btn-sm btn-danger"> <i className="fa fa-trash"></i></button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
    
    
                                                            
    
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Cost</th>
                                                            <th>Disposal</th>
                                                            <th>Improvement</th>
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

export default Intangible