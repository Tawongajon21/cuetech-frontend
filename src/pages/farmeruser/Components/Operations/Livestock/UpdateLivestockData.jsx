import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ERROR_MESSAGE, getData, updateData } from '../../../../../functions/AdminHelper'
import ContentHeader from '../../../../components/ContentHeader'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar';

function UpdateLivestockData() {
    const { id, uid } = useParams()
    const navigate = useNavigate()
    const [livestockdata, setlivestockdata] = useState([]);


    const updateLivestockData = (e) => {
        e.preventDefault()
        const url = `operations/livestock/info/update/${id}/`;
        updateData(url, livestockdata).then((data) => {
            data.response === 1 ? navigate(`/adminuser/farmers/livestock/data/${id}/${uid}`) : alert(ERROR_MESSAGE)
        })
    }

    useEffect(() => {
        getLivestockdata()
    }, []);

    const getLivestockdata = () => {
        const url = `operations/livestock/info/single/${id}/`;
        getData(url).then((data) => {
            data.response === 1 ? setlivestockdata(data.result) : alert(data.message)
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setlivestockdata({
            ...livestockdata,
            [name]: value,
        });
    };
  return (
    <div className="wrapper">
    <Navbar />
    <Sidebar />
    <div className="content-wrapper">
        <ContentHeader title="Update Livestock Data" />

        <section className="content">
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-md-12 mb-2'>
                        <div className="card">
                            <div className="card-header">
                                <div className='row'>
                                    <div className='col-md-6'>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="float-right">
                                            <Link to={{ pathname: `/farmeruser` }} className="btn btn-sm btn-primary"><i class="fa fa-arrow-left"></i> Go Back</Link>
                                        </div>



                                    </div>
                                  
                                </div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={updateLivestockData}>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="">Source</label>
                                            <input type="text" class="form-group form-control" onChange={handleInputChange} value={livestockdata.source} name="source" />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="">Info Type</label>
                                            <select name="info_type" id="" className="form-control form-group" onChange={handleInputChange} value={livestockdata.info_type}>
                                                <option value="">Please Select Info Type</option>
                                                <option value="Bought">Bought</option>
                                                <option value="Slaughtered">Slaughtered</option>
                                                <option value="Sold">Sold</option>
                                                <option value="New Borns">New Borns</option>
                                                <option value="Deceased Youngones">Deceased Youngones</option>
                                                <option value="Deceased Old">Deceased Old</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="">Quantity</label>
                                            <input type="text" class="form-group form-control" onChange={handleInputChange} value={livestockdata.quantity} name="quantity" />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="">Cost</label>
                                            <input type="text" class="form-group form-control" onChange={handleInputChange} value={livestockdata.cost} name="cost" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="">Transport Cost</label>
                                            <input type="text" class="form-group form-control" onChange={handleInputChange} value={livestockdata.transport} name="transport" />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <button className='btn btn-sm btn-primary' type="submit"><i className='fa fa-plus-circle'></i> Update</button>
                                    </div>
                                </form>
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

export default UpdateLivestockData