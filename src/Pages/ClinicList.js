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
    const[users, setUsers] = useState([]);

    //2
    useEffect(() => {
        loadUser();
    },[])
    
    //3 
    const loadUser = async () => {
         const result = await axios.get("http://localhost:8080/clinics");
         console.log(result);
         setUsers(result.data);
    }


    const deleteUser = async id =>{

        await axios.delete(`http://localhost:8080/clinics/${id}`);
        loadUser();
    }


    //for Search
    const [search, setSearch] = useState("");
    // console.log(users.filter(user=>user.clinicName.toLowerCase().include("p")));

  return (
    <div>
        <Container style={{width:1200}} className="mt-20">
            <Card color='dark' outline className='mt-20'>
                <CardHeader>
                    <h1>Clinic'S List</h1>
                    <br></br>
                    <Row>
                        <Col md={9}>
                        <Input
                            type='text'
                            bsSize="lg"
                            placeholder='Search here'

                            //for Search
                            onChange={e => setSearch(e.target.value)}
                        />
                        
                        </Col>
                        <Col md={1}></Col>
                        <Col md={2}>
                            <center>
                            <Button
                                color="success"
                                outline
                                size="lg"
                                
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
                                    {/* private String clinicName;
                                    private String clinicEmail;
                                    private String clinicAddress;
                                    private String clinicPhone;
                                    private String morningTime;
                                    private String afternoonTime;
                                    private String eveningTime;
                                    private Blob image;
                                    private String registrationDate;
                                    private String userUsername; */}

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

                                // users.map(item =>
                                //for serach
                                users.filter(user=>user.clinicName.toLowerCase().include(search))
                                .map(item =>
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