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
        id:'',
        patientId:'',
        prescriptionDate:'',
        frequency:'',
        duration:'',
        remarks:'',
        diagnosis:'',
        quantity:'',
        weight:'',
        bp:''
    });


    const {id} = useParams();


    useEffect(() => {
        loadEmp()
      },[])

    const loadEmp = async () => {

        const result = await axios.get(`http://localhost:8080/prescriptions/${id}`)
        console.log(result)
  
        //14
        setUser(result.data)
      };

  return (
    <div className='container'>
        <h5>Prescription Id : {id}</h5>
        <br></br>
        <ul className='list-group w-50'>
            <li className='list-group-item'>Patient Id : {user.patientId}</li>
            <li className='list-group-item'>Diagnosis : {user.diagnosis}</li>
            <li className='list-group-item'>Prescription Date : {user.prescriptionDate}</li>
            <li className='list-group-item'>Weight : {user.weight}</li>
            <li className='list-group-item'>Blood Presure : {user.bp}</li>

            {/* <li className='list-group-item'>Frequency : {user.frequency}</li>
            <li className='list-group-item'>Duration : {user.duration}</li>
            <li className='list-group-item'>Remark : {user.remarks}</li>
            <li className='list-group-item'>Quantity : {user.quantity}</li> */}
        </ul>
        <hr></hr>
        <Link className="btn btn-primary" to="/CDAC_Project/PrescriptionList">
           Go Back
        </Link>
    </div>
  )
}
