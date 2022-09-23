import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button,Table} from 'reactstrap'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

// export default function ClinicList() {
const ClinicList = () => {

    //for goto Clinic form
    const navigate = useNavigate();

    
    //1
    const[users, setUser] = useState([]);

    //2
    useEffect(() => {
        loadUser();
    },[])
    
    //3 
    const loadUser = async () => {
         const result = await axios.get("http://localhost:8080/clinics");
         console.log(result);
         setUser(result.data);
    }


    const deleteUser = async id =>{

        await axios.delete(`http://localhost:8080/clinics/${id}`);
        loadUser();
    }

  return (
    <div>
        <Container style={{width:1200}} className="mt-20">
            <Card color='dark' outline className='mt-20'>
                <CardHeader>
                    <h1>Clinic'S List</h1>

                    <Row>
                        <Col md={7}>
                            
                        </Col>
                        <Col md={3}></Col>
                        <Col md={2}>
                            <center>
                            <Button
                                color="success"
                                outline
                                //size="sm"
                                //for goto Clinic form
                                onClick={()=>{
                                    navigate("/CDAC_Project/ClinicForm")
                                }}
                            >
                                + Add Clinic
                            </Button>
                            </center>
                        </Col>
                    </Row>
                </CardHeader>

                <CardBody>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Clinic Name</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Phone No</th>
                                <th>Morning </th>
                                <th>Afternoon </th>
                                <th>Evening </th>
                                <th>Registration Date</th>
                                <th><center>Action</center></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // clinicName;
                                // private String clinicAddress;
                                // private String clinicPhone;
                                // private String morningTime;
                                // private String afternoonTime;
                                // private String eveningTime;
                                // private String registrationDate;
                                users.map(item =>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.clinicName}</td>
                                        <td>{item.clinicAddress}</td>
                                        <td>{item.email}</td>
                                        <td>{item.clinicPhone}</td>
                                        <td>{item.morningTime}</td>
                                        <td>{item.afternoonTime}</td>
                                        <td>{item.eveningTime}</td>
                                        <td>{item.registrationDate}</td>
                                        <td>
                                        <Link className='btn btn-outline-primary' to={`/CDAC_Project/ClinicUpdate/${item.id}`}>
                                                Update</Link>
                                            {" "}
                                            <Link className='btn btn-outline-danger' onClick={() => deleteUser(item.id)}>Delete</Link>

                                        </td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </Table>
                    
                </CardBody>

            </Card>
        </Container>
    </div>
        
  )
}
export default ClinicList;