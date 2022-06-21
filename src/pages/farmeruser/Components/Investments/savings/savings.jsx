import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { config, getUserProfile } from '../../../../../functions/AdminHelper'
import { formatDate } from '../../../../../functions/Helper'
import ContentHeader from '../../../../components/ContentHeader'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'

function Savings() {
  
  const { id } = useParams();
  const [savings, setsavings] = useState([]);
  console.log(savings);
  const [profile, setprofile] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {

      getUserProfile(id).then((data) => {
          setprofile(data)
      })
      getSavings();
  }, []);
  const getSavings = () => {
      axios.get(`investment/savings/all/0/`, config())
          .then(res => {
              console.log(res.data)
              res.data.response === 1 ? setsavings(res.data.result) : alert(res.data.message + ". If This messages persists contact admin")
          })
          .catch(err => {
              console.log(err)
          })
  }
  const deleteSavings = (cid) => {
      const ask = window.confirm("Are you sure you want to delete this record ?")
      if (ask === true) {
          axios.delete(`investment/savings/delete/${cid}/${id}/`, config())
              .then(res => {
                  if (res.data.response === 1) {
                      alert(res.data.message)
                      getSavings();
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
            <ContentHeader title="Savings" />
    
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
                                                /**  <Link to={{ pathname: `/adminuser/farmers/details/${id}` }} className="btn btn-sm btn-success mr-2"><i class="fa fa-arrow-left"></i> Go Back</Link>
    
                                                <Link to={{ pathname: `/adminuser/farmers/savings/add/${id}` }} className="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> Add New</Link>*/
                                              }
                                                <Link to={{ pathname: `/adminuser/farmers/details/` }} className="btn btn-sm btn-success mr-2"><i class="fa fa-arrow-left"></i> Go Back</Link>
    
                                                <Link to={{ pathname: `/adminuser/farmers/savings/add/` }} className="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> Add New</Link>
                                            </div>
                                        </div>
    
                                    </div>
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>Amount</th>
                                                <th>Type</th>
                                                <th>Interest Rate</th>
                                                <th>Date Created</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
        {savings.map((sav) => (
                                                <tr>
                                                    <td>{sav.amount}</td>
                                                    <td>{sav.savings_type}</td>
                                                    <td>{sav.interest_rate}</td>
                                                    <td>{formatDate(sav.date_created)}</td>
                                                    <td className='text-center'>
                                                        <div className='button-group'>
                                                            <Link to={{ pathname: `/adminuser/farmers/savings/update/${sav.id}/${id}` }} className="btn btn-sm btn-info mr-2"> <i className="fa fa-edit"></i></Link>
                                                            <button onClick={(e) => deleteSavings(sav.id)} className="btn btn-sm btn-danger"> <i className="fa fa-trash"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
    

    
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Amount</th>
                                                <th>Type</th>
                                                <th>Interest Rate</th>
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

export default Savings