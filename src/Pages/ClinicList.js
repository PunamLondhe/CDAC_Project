import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button,Table} from 'reactstrap'
import { useNavigate } from "react-router-dom";

// export default function ClinicList() {
const ClinicList = () => {

    //for goto Clinic form
    const navigate = useNavigate();

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/clinics")
        .then(resp => {
            console.log(resp)
            setPosts(resp.data)
        }) 
        .catch(err => {
            console.log(err)
        },[])
    })

   //for delete record
    // useEffect(()=>{
    // loadUser()
    // },[])
    const deleteUser = async id => {
        await axios.delete(`http://localhost:8080/clinics/${id}`);
        // loadUser();
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
                    {/* <tr>
                        <Button
                            color="success"
                            outline
                            size="lg"
                        >
                            + Add Clinic
                        </Button>
                    </tr> */}
                    
                </CardHeader>

                <CardBody>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Clinic Name</th>
                                <th>Address</th>
                                <th>Phone No</th>
                                <th>Morning Time</th>
                                <th>Afternoon Time</th>
                                <th>Evening Time</th>
                                <th>Registration Data</th>
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
                                posts.map(item =>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.clinicName}</td>
                                        <td>{item.clinicAddress}</td>
                                        <td>{item.clinicPhone}</td>
                                        <td>{item.morningTime}</td>
                                        <td>{item.afternoonTime}</td>
                                        <td>{item.eveningTime}</td>
                                        <td>{item.registrationDate}</td>
                                        <td>
                                            <Button color="success" outline onClick={()=>{
                                            navigate("/CDAC_Project/ClinicUpdate")
                                            
                                            }}
                                            >Update
                                            </Button>
                                            {" "}
                                            <Button color="danger" outline onClick={() => deleteUser(item.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </Table>
                    
                </CardBody>

            </Card>
        </Container>

        {/* <ul>
            {
                posts.map(post=><li key={post.id}>{post.clinicName}</li>)
            }
        </ul> */}
    </div>
        
  )
}
export default ClinicList;