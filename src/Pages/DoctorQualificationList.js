import React from 'react'
import axios from 'axios'
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button,Table} from 'reactstrap'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export default function DoctorQualificationList()
{
    //1---------------------------------------------
    const [users, setUser] = useState([]);

    useEffect(() => {
        //console.log("Hey");
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/docQualifications");
        console.log(result);
        setUser(result.data);
    }
    //end of 1------------------------------------------


    //for patient deletion
    const deleteQual = async id =>{

        await axios.delete(`http://localhost:8080/docQualifications/${id}`);
        loadUsers();
    }

  return (
        <div>
        <Container style={{width:1200}} className="mt-20">
            <Card color='dark' outline className='mt-20'>
                <CardHeader>
                    <h2>Qualification List</h2>

                    <Row>
                        <Col md={7}>
                            
                        </Col>
                        <Col md={3}></Col>
                        <Col md={2}>
                            <center>
                            {/* 2--------------------------------------------------------- */}
                            <Link className='btn btn-outline-success'to="/CDAC_Project/DoctorQualificationForm">+ Add Qualification</Link>
                            </center>
                        </Col>
                    </Row>
                </CardHeader>

                <CardBody>
                    <Table striped>
                        <thead>
                            <tr>
                                {/* <th>Id</th> */}
                                <th>Graduation</th>
                                <th>Year</th>
                                <th>Post Graduation</th>
                                <th>Year</th>                                
                                <th>Additional Qualification</th>
                                <th>Year</th>
                                <th>Registration No</th>
                                <th>Experiance</th>
                                <th>Action</th>
                                {/* <th></th> */}
                            </tr>
                        </thead>
                        <tbody>
                        {/* id;
                        private String graduation;
                        private String graduationCompletionYear;
                        private String postGrad;
                        private String postGradCompletionYear;
                        private Long medicalRegistrationNo;
                        private String additionalQualification;
                        private String additionalQualificationCompletionYear;
                        private short experience;
                        private Long employeeId; */}
                            {/* 2.display data on form  */}
                            {
                                users.map((user) =>(
                                    <tr> 
                                        {/* <th scope="row">{index + 1}</th> */}
                                        {/* <td>{user.id}</td> */}
                                        <td>{user.graduation}</td>
                                        <td>{user.graduationCompletionYear}</td>
                                        <td>{user.postGrad}</td>
                                        <td>{user.postGradCompletionYear}</td>
                                        <td>{user.additionalQualification}</td>
                                        <td>{user.additionalQualificationCompletionYear}</td>
                                        <td>{user.medicalRegistrationNo}</td>
                                        <td>{user.experience}</td>
                    
                                        <td>
                                            {/* <Link className='btn btn-outline-success'>View</Link>
                                            {" "} */}
                                            <Link className='btn btn-outline-primary' to={`/CDAC_Project/DoctorQualificationUpdate/${user.id}`}>
                                                Update</Link>
                                            {" "}
                                            <Link className='btn btn-outline-danger' onClick={() => deleteQual(user.id)}>Delete</Link>
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
