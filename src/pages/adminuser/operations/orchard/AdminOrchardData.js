import React, { useEffect, useState } from 'react';
import ContentHeader from "../../../components/ContentHeader";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getUserProfile, getData, updateData, ERROR_MESSAGE } from '../../../../functions/AdminHelper';
import Orcharddatatable from './components/OrchardDataTable';
import Orchardexpensetable from './components/OrchardExpenseTable';
import Orchardotherexpense from './components/OrchardOtherExpense';

const Adminorchardsdata = () => {
    const { id, uid } = useParams();
    const [orchardsdata, setorchardsdata] = useState([]);
    const [profile, setprofile] = useState([]);
    const navigate = useNavigate()
    const dat = {
        id: id,
        uid: uid
    }
    useEffect(() => {

        getUserProfile(uid).then((data) => {
            setprofile(data)
        })
        getOrcharddata()
    }, []);

    const getOrcharddata = () => {
        const url = `operations/orchards/single/${id}/${uid}/`;
        getData(url).then((data) => {
            data.response === 1 ? setorchardsdata(data.result) : alert(ERROR_MESSAGE)
        })
    }
    const updateOrcharddata = (e) => {
        e.preventDefault()
        const url = `operations/orchards/update/${id}/${uid}/`;
        updateData(url, orchardsdata).then((data) => {
            data.response === 1 ? alert(data.message) : alert(ERROR_MESSAGE)
        })
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setorchardsdata({
            ...orchardsdata,
            [name]: value,
        });
    };
    const role = localStorage.getItem("role");
    if (role === "1" || role === "2") {

        return (
            <div className="wrapper">
                <Navbar />
                <SideBar />
                <div className="content-wrapper">
                    <ContentHeader title="Orchard Data" />

                    <section className="content">
                        <div className="container-fluid">
                            <div className='row'>
                                <div className='col-md-12 mb-2'>
                                    <div className="card">
                                        <div className="card-header">
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <h5>{profile.full_name}</h5>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className="float-right">
                                                        <Link to={{ pathname: `/adminuser/farmers/orchard/${uid}` }} className="btn btn-sm btn-primary"><i class="fa fa-arrow-left"></i> Go Back</Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={updateOrcharddata}>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label for="">Name</label>
                                                        <input type="text" class="form-group form-control" onChange={handleInputChange} value={orchardsdata.name} name="name" />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="">Variety /Hybrid</label>
                                                        <input type="text" class="form-group form-control" onChange={handleInputChange} value={orchardsdata.variety} name="variety" />
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div class="col-md-6">
                                                        <label for="">Area Planted (ha)</label>
                                                        <input type="text" class="form-group form-control" onChange={handleInputChange} value={orchardsdata.area_planted} name="variety" />
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <button className='btn btn-sm btn-primary' type="submit"><i className='fa fa-plus-circle'></i> Update</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <Orcharddatatable dat={dat} />
                                <Orchardexpensetable dat={dat} />
                                <Orchardotherexpense dat={dat} />

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

export default Adminorchardsdata;
