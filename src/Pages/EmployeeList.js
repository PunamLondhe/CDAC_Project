import React from 'react'
import axios from 'axios'
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button,Table} from 'reactstrap'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export default function EmployeeList()
{
    //1---------------------------------------------
    const [users, setUser] = useState([]);

    useEffect(() => {
        //console.log("Hey");
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/employees");
        console.log(result);
        setUser(result.data);
    }
    //end of 1------------------------------------------


    //for patient deletion
    const deleteEmployee = async id =>{

        await axios.delete(`http://localhost:8080/employees/${id}`);
        loadUsers();
    }

  return (
        <div>
        <Container style={{width:1200}} className="mt-20">
            <Card color='dark' outline className='mt-20'>
                <CardHeader>
                    <h2>Employee List</h2>

                    <Row>
                        <Col md={7}>
                            
                        </Col>
                        <Col md={3}></Col>
                        <Col md={2}>
                            <center>
                            {/* 2--------------------------------------------------------- */}
                            <Link className='btn btn-outline-success'to="/CDAC_Project/EmployeeForm">+ Add Employee</Link>
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
                                <th>Phone No</th>
                                <th>Email</th>
                                <th>Address</th>

                                <th>Action</th>
                                {/* <th></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {/* private Long id;
                                private String empFirstName;
                                private String empLastName;
                                private String mobile;
                                private String gender;
                                private String email;
                                private String dob;
                                private String address;
                                private int salary;
                                private String hiringDate;
                                private String designation;
                                private Long deptId;
                            */}

                            {/* 2.display data on form  */}
                            {
                                users.map((user) =>(
                                    <tr> 
                                        {/* <th scope="row">{index + 1}</th> */}
                                        {/* <td>{user.id}</td> */}
                                        <td>{user.empFirstName}{" "}{user.empLastName}</td>
                                        {/* <td>{user.empLastName}</td> */}
                                        <td>{user.mobile}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address}</td> 

                                        {/* <td>{user.gender}</td>
                                        <td>{user.dob}</td>
                                        <td>{user.salary}</td>
                                        <td>{user.hiring_date}</td>
                                        <td>{user.designation}</td> 
                                        <td>{user.deptId}</td>   */}
                                       
                                        <td>
                                            <Link className='btn btn-outline-success' to={`/CDAC_Project/EmployeeView/${user.id}`}>
                                                View</Link>
                                            {" "}
                                            <Link className='btn btn-outline-primary' to={`/CDAC_Project/EmployeeUpdate/${user.id}`}>
                                                Update</Link>
                                            {" "}
                                            <Link className='btn btn-outline-danger' onClick={() => deleteEmployee(user.id)}>Delete</Link>
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
