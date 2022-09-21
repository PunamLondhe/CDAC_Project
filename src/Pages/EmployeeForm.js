import axios from 'axios';
import React from 'react'
import {useState} from 'react'
import { Container } from 'react-bootstrap'
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button,select,option} from 'reactstrap'

export default function EmployeeForm() 
{
    //8
    // let history = useHistory();
    const navigate = useNavigate();
    

    // 3--------------------------------
        const [user, setUser] = useState({

            //initial values
            id:'',
            empFirstName:'',
            empLastName:'',
            email:'',
            mobile:'',
            gender:'',
            address:'',
            deptId:'',
            dob:'',
            hdate:'',
            designation:'',
            salary:'',

        });
    
    const {id,empFirstName,empLastName,email,mobile,gender,address,deptId,dob,hdate,designation,salary} = user

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
        await axios.post("http://localhost:8080/employees",user);

        // 9 after data is submitted goto PatientList
        //history.push("/CDAC_Project/PatientList")
        navigate('/CDAC_Project/EmployeeList')
    }

  return (
    <div>
        <Container style={{width:700}} className="mt-20">
            <Card>
                <CardHeader>
                    <h3>Employee Details</h3>
                </CardHeader>

                <CardBody>
                    <Form onSubmit={e => onFormSubmit(e)}>
                        <Row>
                        {/* id int auto_increment,
                        emp_first_name varchar(50),
                        emp_last_name varchar(50),
                        mobile varchar(10) not null,
                        gender varchar(6) not null,
                        email varchar (100),
                        dob date,
                        address varchar(300),
                        salary int,
                        hiring_date date,
                        designation varchar(50),
                        dept_id int, */}
                        <Col md={6}>
                            <FormGroup>
                                <Label for="empId">
                                Employee Id
                                </Label>
                                <Input
                                id="empId"
                                name="id"
                                placeholder="Employee Id"
                                type="text"

                                // 4------------------------
                                value={id}  //bcoz of 5..no need to write user.id
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
                                name="hdate"
                                placeholder="Hire Date"
                                type="date"

                                // 4------------------------
                                value={hdate}  //bcoz of 5..no need to write user.id
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="hdate">
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
                            {/* <Button color="dark" className='ms-2' type='reset'>
                                
                            </Button> */}
                        </Container>
                    </Form>

                </CardBody>
            </Card>
        </Container>
    </div>
  )
}
