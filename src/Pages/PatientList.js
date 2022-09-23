import React from 'react'
import axios from 'axios'
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button,Table} from 'reactstrap'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export default function PatientList()
{
    //1---------------------------------------------
    const [users, setUser] = useState([]);

    useEffect(() => {
        //console.log("Hey");
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/patients");
        console.log(result);
        setUser(result.data);
    }
    //end of 1------------------------------------------


    //for patient deletion
    const deletePatient = async id =>{

        await axios.delete(`http://localhost:8080/patients/${id}`);
        loadUsers();
    }

  return (
        <div>
        <Container style={{width:1200}} className="mt-20">
            <Card color='dark' outline className='mt-20'>
                <CardHeader>
                    <h2>Patients List</h2>

                    <Row>
                        <Col md={7}>
                            
                        </Col>
                        <Col md={3}></Col>
                        <Col md={2}>
                            <center>
                            {/* 2--------------------------------------------------------- */}
                            <Link className='btn btn-outline-success'to="/CDAC_Project/PatientForm">+ Add Patient</Link>
                            </center>
                        </Col>
                    </Row>
                </CardHeader>

                <CardBody>
                    <Table striped>
                        <thead>
                            <tr>
                                {/* <th>Id</th> */}
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Phone No</th>
                                <th>Address</th>
                                
                                <th>Action</th>
                                {/* <th></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {/* // id int auto_increment,
                            // first_name varchar (50) not null,
                            // last_name varchar(50),
                            // age tinyint,
                            // mobile varchar(10) default 'NA',
                            // email varchar (100),
                            // address varchar(300),
                            // dept_id int, 
                            // employee_id int, */}

                            {/* 2.display data on form  */}
                            {
                                users.map((user) =>(
                                    <tr> 
                                        {/* <th scope="row">{index + 1}</th> */}
                                        {/* <td>{user.id}</td> */}
                                        <td>{user.firstName} {" "} {user.lastName}</td>
                                        <td>{user.age}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobile}</td>
                                        <td>{user.address}</td>
                                        {/* <td>{user.id}</td> */}

                                        <td>
                                            {/* <Link className='btn btn-outline-success'>View</Link>
                                            {" "} */}
                                            <Link className='btn btn-outline-primary' to={`/CDAC_Project/PatientUpdate/${user.id}`}>
                                                Update</Link>
                                            {" "}
                                            <Link className='btn btn-outline-danger' onClick={() => deletePatient(user.id)}>Delete</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                    
                </CardBody>

            </Card>
        </Container>
    </div>
  )
}
