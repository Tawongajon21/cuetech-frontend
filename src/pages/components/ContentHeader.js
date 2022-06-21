import React from "react";
import { Link } from "react-router-dom";


export default class ContentHeader extends React.Component {
    render() {
        return (
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">{this.props.title}</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to={{ pathname: "#" }}>Home</Link></li>
                                <li className="breadcrumb-item active">{this.props.title}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}