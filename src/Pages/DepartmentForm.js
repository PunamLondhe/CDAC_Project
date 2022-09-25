import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button} from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import { Clinicregister } from '../Services/Clinic_Service';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function DepartmentForm() 
{
    //8
    const navigate = useNavigate();

    // 3--------------------------------
    const [user, setUser] = useState({
        
        id:'',
        deptName:'',
        clinicId:''
        
    })
    const {id,clinicId,deptName} = user

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
        await axios.post("http://localhost:8080/depts",user);

        // 9 after data is submitted goto PatientList
        //history.push("/CDAC_Project/PatientList")
        navigate('/CDAC_Project/DepartmentList')
    }
    
    //for Close
    const CloseForm = async (e) => {
        navigate('/CDAC_Project/DepartmentList')
    }

  return (
    <div>
        <Container style={{width:600}} className="mt-20">

            {/* print data on form  */}
            {/* {JSON.stringify(data)} */}

            <Card color='dark' outline className='mt-20'>
                <CardHeader>
                    <h3>Department Details</h3>
                </CardHeader>

                <CardBody>
                    <Form onSubmit={e => onFormSubmit(e)}>
                        <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="DepartmentId">
                                Department Id
                                </Label>
                                <Input
                                id="DepartmentId"
                                name="id"
                                placeholder="Department Id"
                                type="text"
                                value={id}  //bcoz of 5..no need to write user.id
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="clinicId">
                                Clinic Id
                                </Label>
                                <Input
                                id="clinicId"
                                name="clinicId"
                                placeholder="Clinic Id"
                                type="text"
                                value={clinicId}  //bcoz of 5..no need to write user.id
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="deptName">
                                Department Name
                                </Label>
                                <Input
                                id="deptName"
                                name="deptName"
                                placeholder="Department Name"
                                type="text"
                                value={deptName}  
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
