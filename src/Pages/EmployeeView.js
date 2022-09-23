import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useNavigate,  useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function EmployeeView() 
{
    // 3--------------------------------
    const [user, setUser] = useState({

        //initial values
        empId:'',
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        mobile:'',
        gender:'',
        address:'',
        deptId:'',
        dob:'',
        hiringDate:'',
        designation:'',
        salary:'',

    });


    const {id} = useParams();


    useEffect(() => {
        loadEmp()
      },[])

    const loadEmp = async () => {

        const result = await axios.get(`http://localhost:8080/employees/${id}`)
        console.log(result)
  
        //14
        setUser(result.data)
      };

  return (
    <div className='container'>
        <h5>Employee Id : {id}</h5>
        <hr></hr>
        <ul className='list-group w-50'>
            <li className='list-group-item'>Department Id : {user.deptId}</li>
            <li className='list-group-item'>Name : {user.empFirstName} {" "} {user.empLastName}</li>
            <li className='list-group-item'>Email : {user.email}</li>
            <li className='list-group-item'>Password : {user.password}</li>
            <li className='list-group-item'>Mobile : {user.mobile}</li>
            <li className='list-group-item'>Gender : {user.gender}</li>
            <li className='list-group-item'>Address : {user.address}</li>
            <li className='list-group-item'>Birth Date : {user.dob}</li>
            <li className='list-group-item'>Hire Date : {user.hiringDate}</li>
            <li className='list-group-item'>Designation : {user.designation}</li>
            <li className='list-group-item'>Salary : {user.salary}</li>
        </ul>
        <hr></hr>
        <Link className="btn btn-primary" to="/CDAC_Project/EmployeeList">
            Show Employee List
        </Link>
    </div>
  )
}

