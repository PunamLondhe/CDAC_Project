import React from 'react'
import axios from 'axios'
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button,Table} from 'reactstrap'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export default function DepartmentList()
{
    //1---------------------------------------------
    const [users, setUser] = useState([]);

    useEffect(() => {
        //console.log("Hey");
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/depts");
        console.log(result);
        setUser(result.data);
    }
    //end of 1------------------------------------------


    //for patient deletion
    const deleteUser = async id =>{

        await axios.delete(`http://localhost:8080/depts/${id}`);
        loadUsers();
    }

  return (
        <div>
        <Container style={{width:800}} className="mt-20">
            <Card color='dark' outline className='mt-20'>
                <CardHeader>
                    <h2>Departments</h2>

                    <Row>
                        <Col md={7}>
                            
                        </Col>
                        <Col md={3}></Col>
                        <Col md={2}>
                            <center>
                            {/* 2--------------------------------------------------------- */}
                            <Link className='btn btn-outline-success'to="/CDAC_Project/DepartmentForm">+ Add Department</Link>
                            </center>
                        </Col>
                    </Row>
                </CardHeader>

                <CardBody>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Department Id</th>
                                <th>Department Name</th>
                                <th>Clinic Id</th>
                                
                                
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {/* 2.display data on form  */}
                            {
                                users.map((user) =>(
                                    <tr> 
                                        {/* <th scope="row">{index + 1}</th> */}
                                        <td>{user.id}</td>
                                        <td>{user.deptName}</td>
                                        <td>{user.clinicId}</td>
                                    
                                        <td>
                                            {/* <Link className='btn btn-outline-success'>View</Link> */}
                                            {" "}
                                            <Link className='btn btn-outline-primary' to={`/CDAC_Project/DepartmentUpdate/${user.id}`}>
                                                Update</Link>
                                            {" "}
                                            <Link className='btn btn-outline-danger' onClick={() => deleteUser(user.id)}>Delete</Link>
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
