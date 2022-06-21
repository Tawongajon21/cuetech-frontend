import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import moment from 'moment';
import axios from 'axios';

export const ERROR_MESSAGE = "Something Went Wrong Please try Again";

export const baseURL = 'https://cuetech.pythonanywhere.com/api/v1/';

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

// Users Endpoints

export const getFarmers = async (role) => {
    try {
        const { data } = await axios.get(`${baseURL}users/get-profiles/${role}/`, config())
        if (data.response !== 1) {
            alert(data.message)
        }
        return data.result
    } catch (error) {
        alert(ERROR_MESSAGE)
    }
}
// Profile Functions
export const getProfile = async () => {
    try {
        const { data } = await axios.get(`${baseURL}users/get-profile/`, config())
        if (data.response !== 1) {
            alert(data.message)
            localStorage.clear()
            window.location = "/"
        }

        return data.result
    } catch (error) {
        alert(ERROR_MESSAGE)
    }

}

// Other Users Profile

export const getUserProfile = async (id) => {
    try {
        const { data } = await axios.get(`${baseURL}users/get-user-profile/${id}/`, config())
        if (data.response !== 1) {
            alert(data.message)
        }
        return data.result
    } catch (error) {
        alert(ERROR_MESSAGE)
    }
}


export const postData = async (url, obj) => {
    try {
        const { data } = await axios.post(url, obj, config())
        return data
    } catch (error) {
        const err = {
            "response": 0,
            "message": "something went wrong"
        }
        return err
    }
}
export const getData = async (url) => {
    try {
        const { data } = await axios.get(url, config())
        return data
    } catch (error) {
        const err = {
            "response": 0,
            "message": "something went wrong"
        }
        return err
    }
}
export const updateData = async (url, obj) => {
    try {
        const { data } = await axios.put(url, obj, config())
        return data
    } catch (error) {
        const err = {
            "response": 0,
            "message": "something went wrong"
        }
        return err
    }
}
export const deleteData = async (url) => {
    try {
        const { data } = await axios.delete(url, config())
        return data
    } catch (error) {
        const err = {
            "response": 0,
            "message": "something went wrong"
        }
        return err
    }
}

