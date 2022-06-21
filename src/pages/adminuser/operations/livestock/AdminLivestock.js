import React, { useEffect, useState } from 'react';
import ContentHeader from "../../../components/ContentHeader";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getUserProfile, config } from '../../../../functions/AdminHelper';
import axios from 'axios';
import { formatDate } from '../../../../functions/Helper';

const Adminlivestock = () => {
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
        axios.get(`operations/livestock/all/${id}/`, config())
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
    if (role === "1" || role === "2") {

        return (
            <div className="wrapper">
                <Navbar />
                <SideBar />
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
                                                    <h5>{profile.full_name}</h5>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="float-right">
                                                        <Link to={{ pathname: `/adminuser/farmers/details/${id}` }} className="btn btn-sm btn-success mr-2"><i class="fa fa-arrow-left"></i> Go Back</Link>

                                                        <Link to={{ pathname: `/adminuser/farmers/livestock/add/${id}` }} className="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> Add New</Link>
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
                                                                    <Link to={{ pathname: `/adminuser/farmers/livestock/data/${tan.id}/${id}` }} className="btn btn-sm btn-info mr-2"> View Data</Link>

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
        );
    } else if (role === "3") {
        navigate("/farmers/dashboard")
    }
    else {
        localStorage.clear()
        navigate("/")
    }
}

export default Adminlivestock;
