import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../../../functions/Helper';
import { config, deleteData } from '../../../../../functions/AdminHelper';
const Livestockexpensetable = ({ dat }) => {
    const [livestockexpense, setlivestockexpense] = useState([]);
    useEffect(() => {
        getLivestockexpense()
    }, [])

    const getLivestockexpense = () => {
        axios.get(`operations/livestock/expenses/all/${dat.id}/`, config())
            .then(res => {
                console.log(res.data)
                res.data.response === 1 ? setlivestockexpense(res.data.result) : alert(res.data.message + ". If This messages persists contact admin")
            })
            .catch(err => {
                console.log(err)
            })
    }

    const deleteLivestockinfo = (pk) => {
        const url = `operations/livestock/expenses/delete/${pk}/`
        const conf = window.confirm("Are you sure you want to delete this record")

        if (conf === true) {
            deleteData(url).then((data) => {
                data.response === 1 ? alert(data.message) : alert(data.message)
            })
            getLivestockexpense()
        }
        else {
            alert("Record Not Deleted")
        }
    }
    return (
        <div className='col-md-12 mb-2'>
            <div className="card direct-chat direct-chat-primary">
                <div className="card-header ui-sortable-handle bg-success">
                    <h3 className="card-title">Livestock Expenses</h3>

                    <div className="card-tools">
                        <Link to={{ pathname: `/adminuser/farmers/livestock/expenses/add/${dat.id}/${dat.uid}` }}
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
                                <th>Item</th>
                                <th>Name</th>
                                <th>Cost</th>
                                <th>Quantity Bought</th>
                                <th>Quantity Used</th>
                                <th>Date Created</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {livestockexpense.map((tan) => (
                                <tr>
                                    <td>{tan.item}</td>
                                    <td>{tan.name}</td>
                                    <td>{tan.cost}</td>
                                    <td>{tan.quantity_bought}</td>
                                    <td>{tan.quantity_used}</td>
                                    <td>{formatDate(tan.date_created)}</td>
                                    <td className='text-center'>
                                        <div className='button-group'>
                                            <Link to={{ pathname: `/adminuser/farmers/livestock/expenses/update/${tan.id}/${dat.uid}` }}
                                                className="btn btn-sm btn-info mr-2"> <i className='fa fa-edit'></i></Link>
                                            <button className='btn btn-sm btn-danger' onClick={(e) => deleteLivestockinfo(tan.id)}><i
                                                className='fa fa-trash'></i></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Item</th>
                                <th>Name</th>
                                <th>Cost</th>
                                <th>Quantity Bought</th>
                                <th>Quantity Used</th>
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

export default Livestockexpensetable;
