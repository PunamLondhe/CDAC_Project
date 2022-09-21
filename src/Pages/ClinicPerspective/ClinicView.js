import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useNavigate,  useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function ClinicView() 
{
    // 3--------------------------------
    const [user, setUser] = useState({

        //initial values
        id:'',
        clinicName:'',
        morningTime:'',
        afternoonTime:'',
        clinicAddress:'',
        eveningTime:'',
        clinicPhone:'',
        registrationDate:''
    });

    useEffect(() => {
        loadEmp()
      },[])

    const loadEmp = async () => {

        const result = await axios.get(`http://localhost:8080/clinics/${id}`)
        console.log(result)
  
        //14
        setUser(result.data)
      };



    // // ---------------------------Fetching perticular Clinic----------------------------------------
    //11
    const {id} = useParams();
    // alert(id);


    //12
    useEffect(() => {
        GoToDeptList()
      },[])


    // //10
    // const loadPrsc = async () => {

    //     const result = await axios.get(`http://localhost:8080/clinics/${id}`)
    //     console.log(result)
  
    //     //14
    //     setUser(result.data)
    //   };
// ------------------------------
      
      const GoToDeptList = async (e )=>{
        e.preventDefault();

        //to add data
        // const result = await axios.get(`http://localhost:8080/depts/${clinicId}`);
        // console.log(result);

        // 9 after data is submitted goto PatientList
        //history.push("/CDAC_Project/PatientList")
        // navigate('/CDAC_Project/DeptList')
    }


  return (
    <div className='container'>
        <h5>Clinic Id : {id}</h5>
        <hr></hr>
        <ul className='list-group w-50'>
            {/* <li className='list-group-item'>Id : {user.id}</li> */}
            <li className='list-group-item'>Registration Date : {user.registrationDate}</li>
            <li className='list-group-item'>Name : {user.clinicName}</li>
            <li className='list-group-item'>Address : {user.clinicAddress}</li>
            <li className='list-group-item'>Phone No : {user.clinicPhone}</li>
            <li className='list-group-item'>Morning Time : {user.morningTime}</li>
            <li className='list-group-item'>Afternoon Time : {user.afternoonTime}</li>
            <li className='list-group-item'>Evening Time : {user.eveningTime}</li>
        </ul>
        <hr></hr>
        <Link className="btn btn-primary" to="/CDAC_Project/DeptList" onClick={e => GoToDeptList(e)}>
            Departments List
        </Link>
    </div>
  )
}
