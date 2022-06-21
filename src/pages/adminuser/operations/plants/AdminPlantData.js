import React, { useEffect, useState } from 'react';
import ContentHeader from "../../../components/ContentHeader";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getUserProfile, getData, updateData, ERROR_MESSAGE } from '../../../../functions/AdminHelper';
import Plantdatatable from './components/PlantDataTable';
import Plantexpensetable from './components/PlantExpenseTable';
import Plantotherexpense from './components/PlantOtherExpense';
const Adminplantsdata = () => {
    const { id, uid } = useParams();
    const [plantsdata, setplantsdata] = useState([]);
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
        getPlantdata()
    }, []);

    const getPlantdata = () => {
        const url = `operations/plants/single/${id}/${uid}/`;
        getData(url).then((data) => {
            data.response === 1 ? setplantsdata(data.result) : alert(ERROR_MESSAGE)
        })
    }
    const updatePlantdata = (e) => {
        e.preventDefault()
        const url = `operations/plants/update/${id}/${uid}/`;
        updateData(url, plantsdata).then((data) => {
            data.response === 1 ? alert(data.message) : alert(ERROR_MESSAGE)
        })
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setplantsdata({
            ...plantsdata,
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
                    <ContentHeader title="Plant Data" />

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
                                                        <Link to={{ pathname: `/adminuser/farmers/plants/add/${id}` }} className="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> Add New</Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={updatePlantdata}>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label for="">Name</label>
                                                        <input type="text" class="form-group form-control" onChange={handleInputChange} value={plantsdata.name} name="name" />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="">Variety /Hybrid</label>
                                                        <input type="text" class="form-group form-control" onChange={handleInputChange} value={plantsdata.variety} name="variety" />
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <button className='btn btn-sm btn-primary' type="submit"><i className='fa fa-plus-circle'></i> Update</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <Plantdatatable dat={dat} />
                                <Plantexpensetable dat={dat} />
                                <Plantotherexpense dat={dat} />

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

export default Adminplantsdata;
