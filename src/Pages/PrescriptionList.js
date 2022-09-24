import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button,Table} from 'reactstrap'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

// export default function ClinicList() {
const PrescriptionList = () => {

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
         const result = await axios.get("http://localhost:8080/prescriptions");
         console.log(result);
         setUser(result.data);
    }


    const deleteUser = async id =>{

        await axios.delete(`http://localhost:8080/prescriptions/${id}`);
        loadUser();
    }

  return (
    <div>
        <Container style={{width:1200}} className="mt-20">
            <Card color='dark' outline className='mt-20'>
                <CardHeader>
                    <h1>Prescription List</h1>

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
                                    navigate("/CDAC_Project/PrescriptionForm")
                                }}
                            >
                                + Add 
                            </Button>
                            </center>
                        </Col>
                    </Row>
                </CardHeader>

                <CardBody>
                    <Table striped>
                        <thead>
                            <tr>
                            {/* private String prescriptionDate;
                            private String diagnosis;
                            private short quantity;
                            private short duration;
                            private String frequency;
                            private String remarks;
                            private Long patientId; */}
                                {/* <th>Id</th> */}
                                <th>Patient Id</th>
                                <th>Diagnosis</th>
                                <th>Date</th>
                                <th>Weight</th>
                                <th>Blood Presure</th>
                                {/* <th>Quantity</th>
                                <th>Duration</th>
                                <th>Frequency</th>
                                <th>Remarks</th> */}
                                <th><center>Action</center></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(item =>
                                    <tr>
                                        {/* <td>{item.id}</td> */}
                                        <td>{item.patientId}</td>
                                        <td>{item.diagnosis}</td>
                                        <td>{item.prescriptionDate}</td>     
                                        <td>{item.weight}</td>
                                        <td>{item.bp}</td>                         
                                        {/* <td>{item.quantity}</td>
                                        <td>{item.duration}</td>
                                        <td>{item.frequency}</td>
                                        <td>{item.remarks}</td> */}
                                        
                                        <td>
                                            <Link className='btn btn-outline-success' to={`/CDAC_Project/PrescriptionView/${item.id}`}>
                                                View</Link>
                                            {" "}
                                            <Link className='btn btn-outline-primary' to={`/CDAC_Project/PrescriptionUpdate/${item.id}`}>
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
export default PrescriptionList;