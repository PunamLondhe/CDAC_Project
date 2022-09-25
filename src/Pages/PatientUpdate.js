// private String firstName;
// private String lastName;
// private short age;
// private String mobile;
// private String email;
// private String address;
// private Long employeeId;
// private Long deptId;


import axios from 'axios';
import React from 'react'
import {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
// import { useHistory } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button} from 'reactstrap'

export default function PatientUpdate() 
{
    //8
    // let history = useHistory();
    const navigate = useNavigate();

    //11
    const {id} = useParams();
    // alert(id);
    

    // 3--------------------------------
        const [user, setUser] = useState({

            //initial values
            pId:'',
            pathology_lab_id:'',
            radiology_lab_id:'',
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            mobile:'',
            age:'',
            address:'',
            gender:'',
            image:''
        });
    
    const {firstName,lastName,email,password,mobile,age,address,gender,image} = user

    // 5-----------------
    const onInputChange = e => {
        console.log(e.target.value)

        //6
        setUser({...user, [e.target.name] : e.target.value})
    }


    //12
    useEffect(() => {
      loadPatient()
    },[])

    //7
    const onFormSubmit = async (e) =>{
        e.preventDefault();

        //to update data 
        await axios.post("http://localhost:8080/patients",user);

        // 9 after data is submitted goto PatientList
        navigate('/CDAC_Project/PatientList')
    };

    //10 to load data of specific patient
    const loadPatient = async () => {

      const result = await axios.get(`http://localhost:8080/patients/${id}`)
      console.log(result)

      //14
      setUser(result.data)
    };

    //for Close
    const CloseForm = async (e) => {
        navigate('/CDAC_Project/PatientList')
    }

  return (
    <div>
        <Container style={{width:800}} className="mt-20">
            <Card>
                <CardHeader>
                    <h3>Patient Details</h3>
                    <h6 style={{color:"green"}}>Enter Patient details for update</h6>
                </CardHeader>

                <CardBody>
                    <Form onSubmit={e => onFormSubmit(e)}>
                        <Row>
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

                        {/* <Col md={6}>
                        <FormGroup>
                            <Label for="password">
                            Password
                            </Label>
                            <Input
                            id="password"
                            name="password"
                            placeholder="Enter password "
                            type="password"
                            value={password}
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col> */}


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

                        <Col md={4}>
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
                        
                        <Col md={4}>
                            <FormGroup>
                                <Label for="gender">
                                Gender
                                </Label>
                                <br></br>
                                <select>
                                    <option selected>Select gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
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
                            <Button className='btn btn-success btn-block'>
                                    Update
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

