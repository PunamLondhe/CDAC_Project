import React from 'react';
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button} from 'reactstrap'
import { Container } from 'react-bootstrap'
import axios from 'axios';
import {useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';

export default function PatientPrescription() 
{
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
    
    const {id} = useParams();


    // useEffect(() => {
    //     loadEmp()
    //   },[])

    const loadPatient = async () => {

        const result = await axios.get(`http://localhost:8080/patients/${id}`)
        console.log(result)
  
        //14
        setPatient(result.data)
      };

      // 3---------Prescription-----------------------
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

    });
    const {patientId,prescriptionDate,frequency,duration,remarks,diagnosis,quantity} = user

    //prescription Id
    // const {id} = useParams();


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



  return (
    <div>
        <Row>
        <Col sm="6">
        <Container style={{width:400}} className="mt-20">

          <Card color='dark' outline className='mt-20'>
              <CardHeader>
                  <h3>Patient Details</h3>
              </CardHeader>

              <CardBody>
              <ul>              
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
              </CardBody>
          </Card>
          <hr></hr>
          <Button color="success" className='mt-2'>
          Print
          </Button>
          </Container>
        </Col>
        </Row>
    </div>
  )
}
