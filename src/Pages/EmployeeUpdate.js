//EmployeeUpdate
import axios from 'axios';
import React from 'react'
import {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
// import { useHistory } from 'react-router-dom';
import { useNavigate,  useParams } from 'react-router-dom';
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button,select,option} from 'reactstrap'

export default function EmployeeUpdate() 
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
            id:'',
            empFirstName:'',
            empLastName:'',
            email:'',
            password:'',
            mobile:'',
            gender:'',
            address:'',
            deptId:'',
            dob:'',
            hiringDate:'',
            designation:'',
            salary:'',
            image:'',
        });
    
    const {empFirstName,empLastName,email,password,mobile,gender,address,deptId,dob,hiringDate,
        designation,salary,image} = user

    // 5-----------------
    const onInputChange = e => {
        console.log(e.target.value)

        //6
        setUser({...user, [e.target.name] : e.target.value})
    }

    //12
    useEffect(() => {
        loadEmp()
      },[])
  

    //7
    const onFormSubmit = async (e )=>{
        e.preventDefault();

        //to add data
        await axios.post("http://localhost:8080/employees",user);

        // 9 after data is submitted goto PatientList
        //history.push("/CDAC_Project/PatientList")
        navigate('/CDAC_Project/EmployeeList')
    }
     //10 to load data of specific patient
     const loadEmp = async () => {

        const result = await axios.get(`http://localhost:8080/employees/${id}`)
        console.log(result)
  
        //14
        setUser(result.data)
      };

      //for Close
    const CloseForm = async (e) => {
        navigate('/CDAC_Project/EmployeeList')
    }
    
  return (
    <div>
        <Container style={{width:800}} className="mt-20">
            <Card>
                <CardHeader>
                    <h3>Employee Details</h3>
                    <h6 style={{color:'green'}}>Enter details for Updation</h6>
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
                            name="empFirstName"
                            placeholder="Enter first name"
                            type="text"
                            value={empFirstName}
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
                            name="empLastName"
                            placeholder="Enter last name"
                            type="text"
                            value={empLastName}
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

                        <Col md={6}>
                        <FormGroup>
                            <Label for="designation">
                            Designation
                            </Label>
                            <Input
                            id="designation"
                            name="designation"
                            placeholder="Enter designation"
                            type="text"
                            value={designation}
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>
                        

                        <Col md={6}>
                            <FormGroup>
                                <Label for="deptId">
                                Department Id
                                </Label>
                                <Input
                                id="deptId"
                                name="deptId"
                                placeholder="Department Id"
                                type="text"

                                // 4------------------------
                                value={deptId}  //bcoz of 5..no need to write user.id
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>


                        <Col md={6}>
                        <FormGroup>
                            <Label for="salary">
                            Salary
                            </Label>
                            <Input
                            id="salary"
                            name="salary"
                            placeholder="Enter Salary"
                            type="number"
                            value={salary}
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="dob">
                                Birth Date
                                </Label>
                                <Input
                                id="dob"
                                name="dob"
                                placeholder="Date of Birth"
                                type="date"

                                // 4------------------------
                                value={dob}  //bcoz of 5..no need to write user.id
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="hdate">
                                Hire Date
                                </Label>
                                <Input
                                id="hdate"
                                name="hiringDate"
                                placeholder="Hire Date"
                                type="date"

                                // 4------------------------
                                value={hiringDate}  //bcoz of 5..no need to write user.id
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
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </FormGroup>
                        </Col>


                        <Col md={8}>
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
