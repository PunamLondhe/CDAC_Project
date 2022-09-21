import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useNavigate,  useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function PatientViewForDoctor() 
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


        // pId:'',
        // pathology_lab_id:'',
        // radiology_lab_id:'',
        // firstName:'',
        // lastName:'',
        // email:'',
        // mobile:'',
        // age:'',
        // address:''

    });

    //prescription Id
    const {id} = useParams();


    useEffect(() => {
        loadPres()
        loadPatient()
      },[])

    const loadPres = async () => {

        const result = await axios.get(`http://localhost:8080/prescriptions/${id}`)
        // await axios.get(`http://localhost:8080/patients/${id}`)
        console.log(result)
  
        //14
        setUser(result.data)
      };


    // 3------------For Patient--------------------
    const [patient, setPatient] = useState({

        id:'',
        pathology_lab_id:'',
        radiology_lab_id:'',
        firstName:'',
        lastName:'',
        email:'',
        mobile:'',
        age:'',
        address:''

    });

    const loadPatient = async () => {

    const result = await axios.get(`http://localhost:8080/patients/${id}`)
    console.log(result)

    //14
    setPatient(result.data)
    };


  return (
    <div className='container'>
        <h5>Patient Id : {user.patientId}</h5>
        <br></br>
        <ul className='list-group w-50'>
            {/* <li className='list-group-item'>Patient Id  : {patient.id}</li> */}
            <li className='list-group-item'>Name        : {patient.firstName} {" "} {patient.lastName}</li>
            <li className='list-group-item'>Email       : {patient.email}</li>
            <li className='list-group-item'>Mobile      : {patient.mobile}</li>
            <li className='list-group-item'>Address     : {patient.address}</li>
            <li className='list-group-item'>Age         : {patient.age}</li>

            <li className='list-group-item'>Diagnosis   : {user.diagnosis}</li>
            <li className='list-group-item'>Prescription Date : {user.prescriptionDate}</li>
            <li className='list-group-item'>Frequency   : {user.frequency}</li>
            <li className='list-group-item'>Duration    : {user.duration}</li>
            <li className='list-group-item'>Remark      : {user.remarks}</li>
            <li className='list-group-item'>Quantity    : {user.quantity}</li>
        </ul>
        <hr></hr>
        <Link className="btn btn-primary" to="/CDAC_Project/PatientListForDoctor">
           Go Back
        </Link>
    </div>
  )
}
