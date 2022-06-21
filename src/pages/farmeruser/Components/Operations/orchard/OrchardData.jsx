import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ERROR_MESSAGE, getData, getUserProfile, updateData } from '../../../../../functions/AdminHelper';
import ContentHeader from '../../../../components/ContentHeader';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';
import OrchardDatatable from './OrchardDatatable'
import OrchardExpensetable from './OrchardExpensetable';
import OrchardOtherExpense from './OrchardOtherExpense';


function OrchardData() {
    
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
        const url = `operations/orchards/single/${id}/0/`;
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
    if (role === "3") {
        <div className="wrapper">
        <Navbar />
        <Sidebar />
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

                        < OrchardDatatable dat={dat} />
                        <OrchardExpensetable dat={dat} />
                        <OrchardOtherExpense  dat={dat} />

                    </div>
                </div>
            </section>
        </div>
    </div>
    }
 
}

export default OrchardData