import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../../../functions/Helper';
import { config, deleteData } from '../../../../../functions/AdminHelper';
const Plantsdatatable = ({ dat }) => {
    const [plantsinfo, setplantsinfo] = useState([]);
    useEffect(() => {
        getPlantsinfo()
    }, [])

    const getPlantsinfo = () => {
        axios.get(`operations/plants/info/all/${dat.id}/`, config())
            .then(res => {
                console.log(res.data)
                res.data.response === 1 ? setplantsinfo(res.data.result) : alert(res.data.message + ". If This messages persists contact admin")
            })
            .catch(err => {
                console.log(err)
            })
    }

    const deletePlantsinfo = (pk) => {
        const url = `operations/plants/info/delete/${pk}/`
        const conf = window.confirm("Are you sure you want to delete this record")

        if (conf === true) {
            deleteData(url).then((data) => {
                data.response === 1 ? alert(data.message) : alert(data.message)
            })
            getPlantsinfo()
        }
        else {
            alert("Record Not Deleted")
        }
    }
    return (
        <div className='col-md-12 mb-2'>
            <div className="card direct-chat direct-chat-primary">
                <div className="card-header ui-sortable-handle bg-dark">
                    <h3 className="card-title">Plants Data</h3>

                    <div className="card-tools">
                        <Link to={{ pathname: `/adminuser/farmers/plants/info/add/${dat.id}/${dat.uid}` }}
                            className="btn btn-sm btn-light"><i class="fa fa-plus-circle"></i> Add New</Link>
                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                            <i className="fas fa-minus"></i>
                        </button>
                    </div>
                </div>

                <div className="card-body">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Cost</th>
                                <th>Quantity</th>
                                <th>Date Created</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {plantsinfo.map((tan) => (
                                <tr>
                                    <td>{tan.info_type}</td>
                                    <td>{tan.price}</td>
                                    <td>{tan.quantity}</td>
                                    <td>{formatDate(tan.date_created)}</td>
                                    <td className='text-center'>
                                        <div className='button-group'>
                                            <Link to={{ pathname: `/adminuser/farmers/plants/info/update/${tan.id}/${dat.uid}` }}
                                                className="btn btn-sm btn-info mr-2"> <i className='fa fa-edit'></i></Link>
                                            <button className='btn btn-sm btn-danger' onClick={(e) => deletePlantsinfo(tan.id)}><i
                                                className='fa fa-trash'></i></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Type</th>
                                <th>Cost</th>
                                <th>Qunantity</th>
                                <th>Date Created</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Plantsdatatable;
