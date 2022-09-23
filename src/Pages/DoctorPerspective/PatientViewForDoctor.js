import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button} from 'reactstrap'
import { Container } from 'react-bootstrap'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

export default function PatientViewForDoctor() 
{
    //8
    const navigate = useNavigate();

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


      // 5-----------------
    const onInputChange = e => {
      console.log(e.target.value)

      //6
      setUser({...user, [e.target.name] : e.target.value})
    }

    //7
    const onFormSubmit = async (e )=>{
        e.preventDefault();

        //to add data
        await axios.post("http://localhost:8080/prescriptions",user);

        // 9 after data is submitted goto List
        // navigate('/CDAC_Project/PrescriptionList')
        navigate('/CDAC_Project/PatientPrescription')
    }


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


    // -------------------------------Model------------------
    const [modal,setModal] = useState(false)


  return (
    <div>
      <Row>
        {/* <Col sm="6">
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
              </ul>
              </CardBody>
          </Card>
          <hr></hr>
          <Button color="success" className='mt-2' onClick={ () => setModal(true)}>
          + Prescription
          </Button>
          </Container>
        </Col> */}


        <Col sm="6">
          {/* <Container style={{width:600}} className="mt-20">

          <Card color='dark' outline className='mt-20'>
              <CardHeader>
                  <h3>Patient Details</h3>
              </CardHeader>
              <CardBody>
              <ul>
              <li className='list-group-item'>Diagnosis   : {user.diagnosis}</li>
                <li className='list-group-item'>Prescription Date : {user.prescriptionDate}</li>
                <li className='list-group-item'>Frequency   : {user.frequency}</li>
                <li className='list-group-item'>Duration    : {user.duration}</li>
                <li className='list-group-item'>Remark      : {user.remarks}</li>
                <li className='list-group-item'>Quantity    : {user.quantity}</li>
              </ul>
              </CardBody>
          </Card>
          </Container> */}
          <Container style={{width:600}} className="mt-20">
            <Card>
                <CardHeader>
                    <h3>Prescription Form</h3>
                </CardHeader>

                <CardBody>
                    <Form onSubmit={e => onFormSubmit(e)}>
                        <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="prescription_id">
                                Prescription Id
                                </Label>
                                <Input
                                id="prescription_id"
                                name="id"
                                placeholder="Prescription Id"
                                type="text"
                                value={id}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="pId">
                                Patient Id
                                </Label>
                                <Input
                                id="pId"
                                name="patientId"
                                placeholder="Patient Id"
                                type="text"
                                value={patientId}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Label for="diagnosis">
                                Diagnosis
                                </Label>
                                <Input
                                id="diagnosis"
                                name="diagnosis"
                                placeholder="Enter diagnosis"
                                type="text"
                                value={diagnosis}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="prescription_date">
                                Prescription Date
                                </Label>
                                <Input
                                id="prescription_date"
                                name="prescriptionDate"
                                placeholder="Select Date"
                                type="date"
                                value={prescriptionDate}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                        <FormGroup>
                            <Label for="quantity">
                            Quantity
                            </Label>
                            <Input
                            id="quantity"
                            name="quantity"
                            placeholder="Select Quantity"
                            type="number"
                            value={quantity}  
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={4}>
                        <FormGroup>
                            <Label for="duration">
                            Duration
                            </Label>
                            <Input
                            id="duration"
                            name="duration"
                            placeholder="Select Duration"
                            type="number"
                            value={duration}  
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={4}>
                        <FormGroup>
                            <Label for="frequency">
                            Frequency
                            </Label>
                            <Input
                            id="frequency"
                            name="frequency"
                            placeholder="Select Frequency"
                            type="text"
                            value={frequency}  
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={12}>
                        <FormGroup>
                            <Label for="remark">
                            Remark
                            </Label>
                            <Input
                            id="remark"
                            name="remarks"
                            placeholder="Enter Remark"
                            type='textarea'
                            value={remarks}  
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        </Row>
                        
                        <Container>
                            <Button color="dark">
                                    Submit
                            </Button>
                            {/* <Button color="dark" className='ms-2' onClick={ () => setModal(true)}>
                              Print
                            </Button> */}
                            <Button color="dark" className='ms-2' type='reset'>
                                    Clear
                            </Button>
                        </Container>
                    </Form>


                    
                </CardBody>
            </Card>
        </Container>
        </Col>
      </Row>


{/* -------------------To See Prescription----------------------------- */}
      <Modal
            size='lg'
            isOpen={modal}
            toggle={ () => setModal(!modal)}
          >
            
            <ModalHeader
              toggle={ () => setModal(!modal)}
            >
              Prescription Details
            </ModalHeader>
            <ModalBody>
            <Form onSubmit={e => onFormSubmit(e)}>
                        <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="prescription_id">
                                Prescription Id
                                </Label>
                                <Input
                                id="prescription_id"
                                name="id"
                                placeholder="Prescription Id"
                                type="text"
                                value={id}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="pId">
                                Patient Id
                                </Label>
                                <Input
                                id="pId"
                                name="patientId"
                                placeholder="Patient Id"
                                type="text"
                                value={patient.id}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Label for="diagnosis">
                                Diagnosis
                                </Label>
                                <Input
                                id="diagnosis"
                                name="diagnosis"
                                placeholder="Enter diagnosis"
                                type="text"
                                value={diagnosis}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="prescription_date">
                                Prescription Date
                                </Label>
                                <Input
                                id="prescription_date"
                                name="prescriptionDate"
                                placeholder="Select Date"
                                type="date"
                                value={prescriptionDate}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                        <FormGroup>
                            <Label for="quantity">
                            Quantity
                            </Label>
                            <Input
                            id="quantity"
                            name="quantity"
                            placeholder="Select Quantity"
                            type="number"
                            value={quantity}  
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={4}>
                        <FormGroup>
                            <Label for="duration">
                            Duration
                            </Label>
                            <Input
                            id="duration"
                            name="duration"
                            placeholder="Select Duration"
                            type="number"
                            value={duration}  
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={4}>
                        <FormGroup>
                            <Label for="frequency">
                            Frequency
                            </Label>
                            <Input
                            id="frequency"
                            name="frequency"
                            placeholder="Select Frequency"
                            type="text"
                            value={frequency}  
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={12}>
                        <FormGroup>
                            <Label for="remark">
                            Remark
                            </Label>
                            <Input
                            id="remark"
                            name="remarks"
                            placeholder="Enter Remark"
                            type='textarea'
                            value={remarks}  
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        </Row>
                        
                        <Container>
                            <Button color="dark">
                                    Print
                            </Button>
                            
                        </Container>
                    </Form>
            </ModalBody>

          </Modal>

          <hr></hr>
            {/* <Button color="success" className='mt-2' onClick={ () => setModal(true)}>
              +  Prescription
            </Button> */}

            
          
    </div>
  )
}
