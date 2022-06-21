import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Courselevel = () => {
    const [program, setProgram] = useState([]);
    const [level, setlevel] = useState([]);
    const [course, setcourse] = useState([]);
    const config = {
        headers: {
            Authorization: 'Token ' + localStorage.getItem('token')
        }
    }
    useEffect(() => {
        // get all course
        axios.get('get-courses/', config)
            .then(
                res => {

                    setcourse(res.data)
                }
            )
            .catch(
                err => {
                    console.log(err)
                }
            )

        // get levels
        axios.get('get-levels/', config)
            .then(
                res => {

                    setlevel(res.data)
                }
            )
            .catch(
                err => {
                    console.log(err)

                }
            )

        // get programs
        axios.get('get-programs/', config)
            .then(
                res => {

                    setProgram(res.data)
                }
            )
            .catch(
                err => {
                    console.log(err)
                }
            )

    }, []);

    return (
        <>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='form-group'>
                        <label>Program</label>
                        <select class="form-control" name='program' required>
                            <option value="">Select Program</option>
                            {program.map((prg) => (
                                <option value={prg.id}>{prg.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='form-group'>
                        <label>Level</label>
                        <select class="form-control" name='level' required >
                            <option value="">Select Level</option>
                            {level.map((lvl) => (
                                <option value={lvl.id}>{lvl.name}</option>
                            ))}
                        </select>
                    </div>

                </div>
                <div className='col-md-4'>
                    <div className='form-group'>
                        <label>Course</label>
                        <select class="form-control" name='course' required>
                            <option value="">Select Course</option>

                            {course.map((crs) => (
                                <option value={crs.id}>{crs.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>




        </>
    );
}

export default Courselevel;
