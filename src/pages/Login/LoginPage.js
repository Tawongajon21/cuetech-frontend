import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { isAuthenticated } from '../../functions/Helper';
import { baseURL } from '../../functions/AdminHelper';


const Loginpage = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleLogin = e => {
        e.preventDefault();
        axios.post(`${baseURL}users/login/`, user)
            .then(res => {
                if (res.data.response === 1) {
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('role', res.data.role)
                    localStorage.setItem('isLogged', true)
                    localStorage.setItem('sessionExpire', new Date().getTime())
                    // console.log("the role", res.data.role)
                    isAuthenticated(res.data.role);
                }
                else {
                    Swal.fire({
                        title: 'Warning!',
                        text: res.data.message,
                        icon: 'warning',
                        confirmButtonText: 'Continue!'
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const isLogged = localStorage.getItem('isLogged')
    const role = localStorage.getItem("role");
      // isLogged === "true" ?  isAuthenticated(parseInt(role)) :


      if (isLogged === "true") {
        return     isAuthenticated(parseInt(role))
        } else {
            return (
                <div className="hold-transition login-page">
                    <div className="login-box">
                        <div className="login-logo">
                            <b>CUE</b>TECH
                        </div>
                        <div className="card">
                            <div className="card-body login-card-body">
                                <p className="login-box-msg">Sign in to start your session</p>
    
                                <form onSubmit={handleLogin}>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Username" name='username' onChange={handleInputChange} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-user"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="password" className="form-control" placeholder="Password" name='password' onChange={handleInputChange} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-lock"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row pt-3">
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }


   
   

  
}

export default Loginpage;
