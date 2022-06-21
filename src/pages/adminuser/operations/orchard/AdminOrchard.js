import React, { useEffect, useState } from 'react';
import ContentHeader from "../../../components/ContentHeader";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getUserProfile, config } from '../../../../functions/AdminHelper';
import axios from 'axios';
import { formatDate } from '../../../../functions/Helper';

const Adminochard = () => {
    const { id } = useParams();
    const [ochard, setochard] = useState([]);
    const [profile, setprofile] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {

        getUserProfile(id).then((data) => {
            setprofile(data)
        })
        getOchard();
    }, []);
    
    const getOchard = () => {
        axios.get(`operations/orchards/all/${id}/`, config())
            .then(res => {
                console.log(res.data)
                res.data.response === 1 ? setochard(res.data.result) : alert(res.data.message + ". If This messages persists contact admin")
            })
            .catch(err => {
                console.log(err)
            })
    }
    const deleteOchard = (cid) => {
        const ask = window.confirm("Are you sure you want to delete this record ?")
        if (ask === true) {
            axios.delete(`operations/orchards/delete/${cid}/${id}/`, config())
                .then(res => {
                    if (res.data.response === 1) {
                        alert(res.data.message)
                        getOchard();
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
                    <ContentHeader title="Ochard" />

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
                                                        <Link to={{ pathname: `/adminuser/farmers/orchard/add/${id}` }} className="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> Add New</Link>
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
                                                        <th>Date Planted</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {ochard.map((tan) => (
                                                        <tr>
                                                            <td>{tan.name}</td>
                                                            <td>{tan.variety}</td>
                                                            <td>{tan.area_planted}</td>
                                                            <td>{formatDate(tan.date_planted)}</td>
                                                            <td className='text-center'>
                                                                <div className='button-group'>
                                                                    <Link to={{ pathname: `/adminuser/farmers/orchard/data/${tan.id}/${id}` }} className="btn btn-sm btn-info mr-2"> View Data</Link>

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

export default Adminochard;
