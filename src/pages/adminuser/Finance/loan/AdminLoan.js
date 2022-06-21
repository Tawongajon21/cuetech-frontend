import React, { useState, useEffect } from 'react';
import ContentHeader from "../../../components/ContentHeader";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getUserProfile, config } from '../../../../functions/AdminHelper';
import axios from 'axios';
import { formatDate } from '../../../../functions/Helper';
const Adminloan = () => {

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
        axios.get(`finance/loan/all/${id}/`, config())
            .then(res => {
                res.data.response === 1 ? setloan(res.data.result) : alert(res.data.message + ". If This messages persists contact admin")
            })
            .catch(err => {
                console.log(err)
            })
    }
    const deleteLoan = (cid) => {
        const ask = window.confirm("Are you sure you want to delete this record ?")
        if (ask === true) {
            axios.delete(`finance/loan/delete/${cid}/${id}/`, config())
                .then(res => {
                    if (res.data.response === 1) {
                        alert(res.data.message)
                        getLoan();
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
    if (role === "1" || role === "2") {

        return (
            <div className="wrapper">
                <Navbar />
                <SideBar />
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
                                                    <h5>{profile.full_name}</h5>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="float-right">
                                                        <Link to={{ pathname: `/adminuser/farmers/details/${id}` }} className="btn btn-sm btn-success mr-2"><i class="fa fa-arrow-left"></i> Go Back</Link>

                                                        <Link to={{ pathname: `/adminuser/farmers/loan/add/${id}` }} className="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> Add New</Link>
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
                                                                    <Link to={{ pathname: `/adminuser/farmers/loan/update/${ln.id}/${id}` }} className="btn btn-sm btn-info mr-2"> <i className="fa fa-edit"></i></Link>
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
        );
    } else if (role === "3") {
        navigate("/farmers/dashboard")
    }
    else {
        localStorage.clear()
        navigate("/")
    }
}

export default Adminloan;
