import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import moment from 'moment';
import axios from 'axios';

const ERROR_MESSAGE = "Something Went Wrong Please try Again";

export const initTable = () => {
    //initialize datatable
    $(document).ready(function () {
        setTimeout(function () {
            $('#dtTable').DataTable();
        }, 1000);
    });
}
// config
export const config = () => {
    const token = localStorage.getItem('token');
    const userData = {
        headers: {
            Authorization: 'Token ' + token,
        }
    }
    return userData;
}

// check if the user is logged in or not

export const isAuthenticated = (role) => {
    switch (role) {
        case 1:
            console.log("Is authenticated is hit")
            window.location = "/adminuser/dashboard";
            break;
        case 2:
            window.location = "/adminuser/dashboard";
            break;
        case 3:
             window.location = "/farmers/dashboard";
            break;
        default:
            localStorage.clear()
            window.location = "/";
            break;
    }
}
export const getAge = (dateString) => {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}



export const formatDate = (date) => {
    const newDate = moment(new Date(date)).format("YYYY-MM-DD HH:mm:ss")
    return newDate;
}

// All Profile Endpoints



