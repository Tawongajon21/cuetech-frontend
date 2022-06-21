import React, { useState, useEffect } from 'react';
import ContentHeader from "../../../components/ContentHeader";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import { Link, useParams, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { config, formatDate, initTable } from '../../../../functions/Helper';

const Admingeneralexpenses = () => {
    const { id } = useParams();
    const [generalexpenses, setgeneralexpenses] = useState([]);
    const [profile, setprofile] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        getFarmerProfile();
        getGeneralExpenses();
        initTable();
    }, [])
    const getGeneralExpenses = () => {
        axios.get(`operations/generalexpenses/all/${id}/`, config())
            .then(res => {
                res.data.response === 1 ? setgeneralexpenses(res.data.result) : alert(res.data.message + ". If This messages persists contact admin")
            })
            .catch(err => {
                console.log(err)
            })
    }
    const deleteGeneralExpenses = (cid) => {
        const ask = window.confirm("Are you sure you want to delete this record ?")
        if (ask === true) {
            axios.delete(`operations/generalexpenses/delete/${cid}/${id}/`, config())
                .then(res => {
                    if (res.data.response === 1) {
                        alert(res.data.message)
                        getGeneralExpenses();
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

    const getFarmerProfile = () => {
        axios.get(`users/get-user-profile/${id}/`, config())
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
    if (role === "3" ) {

        return (
            <div className="wrapper">
                <Navbar />
                <SideBar />
                <div className="content-wrapper">
                    <ContentHeader title=" General Expenses" />

                    <section className="content">
                        <div className="container-fluid">
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className="card">
                                        <div className="card-header bg-secondary">
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <h5>{profile.full_name}</h5>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="float-right button-group">
                                                        <Link to={{ pathname: `/adminuser/farmers/details/${id}` }} className="btn btn-sm btn-light mr-2"><i class="fa fa-arrow-left"></i> Go Back</Link>
                                                        <Link to={{ pathname: `/adminuser/farmers/generalexpenses/add/${id}` }} className="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> Add New</Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Item</th>
                                                        <th>Description</th>
                                                        <th>Cost</th>
                                                        <th>Date Created</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {generalexpenses.map((cap) => (
                                                        <tr>
                                                            <td>{cap.item}</td>
                                                            <td>{cap.description}</td>
                                                            <td>{cap.cost}</td>
                                                            <td>{formatDate(cap.date_created)}</td>
                                                            <td className='text-center'>
                                                                <div className='button-group'>
                                                                    <Link to={{ pathname: `/adminuser/farmers/generalexpenses/update/${cap.id}/${id}` }} className="btn btn-sm btn-info mr-2"> <i className="fa fa-edit"></i></Link>
                                                                    <button onClick={(e) => (deleteGeneralExpenses(cap.id))} className="btn btn-sm btn-danger"> <i className="fa fa-trash"></i></button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Item</th>
                                                        <th>Description</th>
                                                        <th>Cost</th>
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

export default Admingeneralexpenses;
