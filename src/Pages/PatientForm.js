// patient_id int auto_increment,
// first_name varchar (50) not null,
// last_name varchar(50),
// age tinyint,
// mobile varchar(10) default 'NA',
// email varchar (100),
// address varchar(300),
// pathology_lab_id int,
// radiology_lab_id int,



import axios from 'axios';
import React from 'react'
import {useState} from 'react'
import { Container } from 'react-bootstrap'
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button} from 'reactstrap'
import { Link } from 'react-router-dom'

export default function PatientForm() 
{
    //8
    // let history = useHistory();
    const navigate = useNavigate();
    

    // 3--------------------------------
        const [user, setUser] = useState({

            //initial values
            id:'',
            pathology_lab_id:'',
            radiology_lab_id:'',
            firstName:'',
            lastName:'',
            email:'',
            mobile:'',
            age:'',
            address:'',
        });
    
    const {id,pathology_lab_id,radiology_lab_id,firstName,lastName,email,mobile,age,address} = user

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
        await axios.post("http://localhost:8080/patients",user);

        // 9 after data is submitted goto PatientList
        //history.push("/CDAC_Project/PatientList")
        navigate('/CDAC_Project/PatientList')
    }

  return (
    <div>
        <Container style={{width:700}} className="mt-20">
            <Card>
                <CardHeader>
                    <h3>Patient Details</h3>
                </CardHeader>

                <CardBody>
                    <Form onSubmit={e => onFormSubmit(e)}>
                        <Row>
                        
                        <Col md={6}>
                            <FormGroup>
                                <Label for="pId">
                                Patient Id
                                </Label>
                                <Input
                                id="pId"
                                name="id"
                                placeholder="Patient Id"
                                type="text"

                                // 4------------------------
                                value={id}  //bcoz of 5..no need to write user.id
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="age">
                                Age
                                </Label>
                                <Input
                                id="age"
                                name="age"
                                placeholder="Select Age"
                                type="number"
                                value={age}
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        
                        
                        <Col md={6}>
                        <FormGroup>
                            <Label for="firstName">
                            First Name
                            </Label>
                            <Input
                            id="firstName"
                            name="firstName"
                            placeholder="Enter first name"
                            type="text"
                            value={firstName}
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={6}>
                        <FormGroup>
                            <Label for="lastName">
                            Last Name
                            </Label>
                            <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Enter last name"
                            type="text"
                            value={lastName}
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={6}>
                        <FormGroup>
                            <Label for="email">
                            Email Id
                            </Label>
                            <Input
                            id="email"
                            name="email"
                            placeholder="Enter Email Id"
                            type="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={6}>
                        <FormGroup>
                            <Label for="mobile">
                            Mobile No.
                            </Label>
                            <Input
                            id="mobile"
                            name="mobile"
                            placeholder="Enter Mobile Number"
                            type="number"
                            value={mobile}
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>


                        <Col md={12}>
                        <FormGroup>
                            <Label for="address">
                            Address
                            </Label>
                            <Input
                            id="address"
                            name="address"
                            placeholder="Enter Address"
                            type='textarea'
                            value={address}
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>
                        </Row>
                        
                        <Container>
                            <Button color="dark">
                                    Submit
                            </Button>
                            {" "}
                            {/* <Link className="btn btn-primary" to="/CDAC_Project/PrescriptionForm">
                            Prescription Details
                            </Link> */}
                            
                        </Container>
                    </Form>

                </CardBody>
            </Card>
        </Container>
    </div>
  )
}
