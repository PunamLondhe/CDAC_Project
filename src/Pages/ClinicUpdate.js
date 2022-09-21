import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button} from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import { Clinicregister } from '../Services/Clinic_Service';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ClinicUpdate() 
{
    //8
    const navigate = useNavigate();

    //11
    const {id} = useParams();
    // alert(id);

    // 3--------------------------------
    const [user, setUser] = useState({
        
        id:'',
        clinicName:'',
        morningTime:'',
        afternoonTime:'',
        clinicAddress:'',
        eveningTime:'',
        clinicPhone:'',
        registrationDate:''
    })
    const {clinicId,clinicName,morningTime,afternoonTime,clinicAddress,eveningTime,clinicPhone,registrationDate} = user


    // 5-----------------
    const onInputChange = e => {
        console.log(e.target.value)

        //6
        setUser({...user, [e.target.name] : e.target.value})
    }

    //12
    useEffect(() => {
        loadClinic()
      },[])
  

    //7
    const onFormSubmit = async (e )=>{
        e.preventDefault();

        //to add data
        await axios.post("http://localhost:8080/clinics",user);

        // 9 after data is submitted goto PatientList
        //history.push("/CDAC_Project/PatientList")
        navigate('/CDAC_Project/ClinicList')
    }
    
    //10 to load data of specific patient
    const loadClinic = async () => {

        const result = await axios.get(`http://localhost:8080/clinics/${id}`)
        console.log(result)
  
        //14
        setUser(result.data)
      };

  return (
    <div>
        <Container style={{width:600}} className="mt-20">

            {/* print data on form  */}
            {/* {JSON.stringify(data)} */}

            <Card color='dark' outline className='mt-20'>
                <CardHeader>
                    <h3>Clinic Details</h3>
                    <h6 style={{color:"green"}}>Enter details for Updation</h6>
                </CardHeader>

                <CardBody>
                    <Form onSubmit={e => onFormSubmit(e)}>
                        <Row>
                        <Col md={8}>
                            <FormGroup>
                                <Label for="clinicId">
                                Clinic Id
                                </Label>
                                <Input
                                id="clinicId"
                                name="clinicId"
                                placeholder="Clinic Id"
                                type="text"
                                value={id}  //bcoz of 5..no need to write user.id
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
                        </Row>
                        
                        <Container>
                            <Button color="dark">
                                    Submit
                            </Button>
                            <Button color="dark" className='ms-2' type='reset'>
                                    Clear
                            </Button>
                        </Container>
                    </Form>
                </CardBody>
            </Card>
        </Container>
    </div>
  )
}
