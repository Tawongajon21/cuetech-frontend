import React, { useEffect, useState } from 'react';
import ContentHeader from "../../../components/ContentHeader";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/Sidebar";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getUserProfile, getData, updateData, ERROR_MESSAGE } from '../../../../functions/AdminHelper';
import Livestockdatatable from './components/LiveStockDataTable';
import Livestockexpensetable from './components/LivestockExpenseTable';
import Livestockotherexpense from './components/LivestockOtherExpense';
const Adminlivestockdata = () => {
    const { id, uid } = useParams();
    const [livestockdata, setlivestockdata] = useState([]);
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
        getLivestockdata()
    }, []);

    const getLivestockdata = () => {
        const url = `operations/livestock/single/${id}/${uid}/`;
        getData(url).then((data) => {
            data.response === 1 ? setlivestockdata(data.result) : alert(ERROR_MESSAGE)
        })
    }
    const updateLivestockdata = (e) => {
        e.preventDefault()
        const url = `operations/livestock/update/${id}/${uid}/`;
        updateData(url, livestockdata).then((data) => {
            data.response === 1 ? alert(data.message) : alert(ERROR_MESSAGE)
        })
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setlivestockdata({
            ...livestockdata,
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
                    <ContentHeader title="Livestock Data" />

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
                                                        <Link to={{ pathname: `/adminuser/farmers/livestock/${uid}` }} className="btn btn-sm btn-success mr-2"><i class="fa fa-arrow-left"></i> Go Back</Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={updateLivestockdata}>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label for="">Name</label>
                                                        <input type="text" class="form-group form-control" onChange={handleInputChange} value={livestockdata.name} name="name" />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="">Variety /Hybrid</label>
                                                        <input type="text" class="form-group form-control" onChange={handleInputChange} value={livestockdata.variety} name="variety" />
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <button className='btn btn-sm btn-primary' type="submit"><i className='fa fa-plus-circle'></i> Update</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <Livestockdatatable dat={dat} />
                                <Livestockexpensetable dat={dat} />
                                <Livestockotherexpense dat={dat} />

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

export default Adminlivestockdata;
