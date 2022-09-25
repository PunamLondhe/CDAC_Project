import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button} from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import { Clinicregister } from '../Services/Clinic_Service';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ClinicForm() 
{
    //8
    const navigate = useNavigate();

    // 3--------------------------------
    const [user, setUser] = useState({
        
        id:'',
        clinicName:'',
        email:'',
        password:'',
        morningTime:'',
        afternoonTime:'',
        clinicAddress:'',
        eveningTime:'',
        clinicPhone:'',
        registrationDate:'',
        image:''
    })
    const {id,clinicName,email,password,morningTime,afternoonTime,clinicAddress,eveningTime,image,
        clinicPhone,registrationDate} = user


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
        await axios.post("http://localhost:8080/clinics",user);

        // 9 after data is submitted goto PatientList
        //history.push("/CDAC_Project/PatientList")
        navigate('/CDAC_Project/ClinicList')
    }
    
    //for Close
    const CloseForm = async (e) => {
        navigate('/CDAC_Project/ClinicList')
    }
   
  return (
    <div>
        <Container style={{width:800}} className="mt-20">

            {/* print data on form  */}
            {/* {JSON.stringify(data)} */}

            <Card color='dark' outline className='mt-20'>
                <CardHeader>
                    <h3>Clinic Details</h3>
                </CardHeader>

                <CardBody>
                    <Form onSubmit={e => onFormSubmit(e)}>
                        <Row>
                        <Col md={8}>
                        <FormGroup>
                            <Label for="clinicName">
                            Clinic Name
                            </Label>
                            <Input
                            id="clinicName"
                            name="clinicName"
                            placeholder="Enter Clinic name"
                            type="text"
                            value={clinicName}  
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="clinicMTime">
                                Clinic Morning Time
                                </Label>
                                <Input
                                id="clinicMTime"
                                name="morningTime"
                                placeholder="Morining Time"
                                type="text"
                                value={morningTime}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        
                        
                        <Col md={8}>
                            <FormGroup>
                                <Label for="email">
                                Email Id
                                </Label>
                                <Input
                                id="email"
                                name="email"
                                placeholder="Email Id"
                                type="email"
                                value={email}  //bcoz of 5..no need to write user.id
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="clinicATime">
                                Clinic Afternoon Time
                                </Label>
                                <Input
                                id="clinicATime"
                                name="afternoonTime"
                                placeholder="Afternoon Time"
                                type="text"
                                value={afternoonTime}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>

                        <Col md={8}>
                        <FormGroup>
                            <Label for="password">
                            Password
                            </Label>
                            <Input
                            id="password"
                            name="password"
                            placeholder="Enter password"
                            type='password'
                            value={password}  
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="clinicETime">
                                Clinic Evening Time
                                </Label>
                                <Input
                                id="clinicETime"
                                name="eveningTime"
                                placeholder="Evening Time"
                                type="text"
                                value={eveningTime}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        

                        <Col md={8}>
                        <FormGroup>
                            <Label for="clinicPhone">
                            Phone Number
                            </Label>
                            <Input
                            id="clinicPhone"
                            name="clinicPhone"
                            placeholder="Enter Phone Number"
                            value={clinicPhone}  
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="registrationDate">
                                Registration Date
                                </Label>
                                <Input
                                id="registrationDate"
                                name="registrationDate"
                                placeholder="Select Date"
                                type="date"
                                value={registrationDate}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>

                        <Col md={8}>
                        <FormGroup>
                            <Label for="clinicAddress">
                            Address
                            </Label>
                            <Input
                            id="clinicAddress"
                            name="clinicAddress"
                            placeholder="Enter Address"
                            type='textarea'
                            value={clinicAddress}  
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={4}>
                        <FormGroup>
                            <Label for="image">
                            Image
                            </Label>
                            <Input
                            id="image"
                            name="image"
                            placeholder="Image"
                            type='image'
                            value={image}  
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        </Row>
                        
                        <Container>
                            <Button color="dark">
                                    Submit
                            </Button>
                            <Button color="dark" className='ms-2' type='reset' onClick={e => CloseForm(e)}>
                                    Close
                            </Button>
                        </Container>
                    </Form>
                </CardBody>
            </Card>
        </Container>
    </div>
  )
}
