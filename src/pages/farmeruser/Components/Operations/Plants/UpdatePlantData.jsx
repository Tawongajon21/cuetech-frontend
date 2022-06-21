import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ERROR_MESSAGE, getData, updateData } from '../../../../../functions/AdminHelper'
import ContentHeader from '../../../../components/ContentHeader'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'

function UpdatePlantData() {
  const { id, uid } = useParams()
  const navigate = useNavigate()
  const [plantsdata, setplantsdata] = useState([]);


  const updatePlantsData = (e) => {
      e.preventDefault()
      const url = `operations/plants/info/update/${id}/`;
      updateData(url, plantsdata).then((data) => {
          data.response === 1 ? navigate(`/adminuser/farmers/plants/data/${id}/${uid}`) : alert(ERROR_MESSAGE)
      })
  }

  useEffect(() => {
      getPlantsdata()
  }, []);

  const getPlantsdata = () => {
      const url = `operations/plants/info/single/${id}/`;
      getData(url).then((data) => {
          data.response === 1 ? setplantsdata(data.result) : alert(data.message)
      })
  }

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setplantsdata({
          ...plantsdata,
          [name]: value,
      });
  };
  return (
    <div className="wrapper">
            <Navbar />
            <Sidebar />
            <div className="content-wrapper">
                <ContentHeader title="Update Plants Data" />

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
                                                    <Link to={{ pathname: `/adminuser/farmers/plants/add/${id}` }} className="btn btn-sm btn-primary"><i class="fa fa-plus-circle"></i> Add New</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={updatePlantsData}>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Info Type</label>
                                                    <select name="info_type" id="" className="form-control form-group" onChange={handleInputChange} value={plantsdata.info_type}>
                                                        <option value="">Please Select Info Type</option>
                                                        <option value="Harvested">Harvested</option>
                                                        <option value="Sold">Sold</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="">Quantity</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={plantsdata.quantity} name="quantity" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Price</label>
                                                    <input type="text" class="form-group form-control" onChange={handleInputChange} value={plantsdata.price} name="price" />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <button className='btn btn-sm btn-primary' type="submit"><i className='fa fa-plus-circle'></i> Submit</button>
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

export default UpdatePlantData