import React from 'react'
import axios from 'axios'
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button,Table} from 'reactstrap'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export default function ProductList()
{
    //1---------------------------------------------
    const [users, setUser] = useState([]);

    useEffect(() => {
        //console.log("Hey");
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/products");
        console.log(result);
        setUser(result.data);
    }
    //end of 1------------------------------------------


    //for patient deletion
    const deleteProduct = async id =>{

        await axios.delete(`http://localhost:8080/products/${id}`);
        loadUsers();
    }

  return (
        <div>
        <Container style={{width:800}} className="mt-20">
            <Card color='dark' outline className='mt-20'>
                <CardHeader>
                    <h2>Product List</h2>

                    <Row>
                        <Col md={7}>
                            
                        </Col>
                        <Col md={3}></Col>
                        <Col md={2}>
                            <center>
                            {/* 2--------------------------------------------------------- */}
                            <Link className='btn btn-outline-success'to="/CDAC_Project/ProductForm">+ Add Product</Link>
                            </center>
                        </Col>
                    </Row>
                </CardHeader>

                <CardBody>
                    <Table striped>
                        <thead>
                        {/* // product_id int auto_increment,
                        // product_name varchar (100),
                        // product_manufacturer_name varchar (100),
                        // frequency varchar (20),
                        // remarks varchar (30),
                        // prescription_id int, */}

                            <tr>
                                <th>Id</th>
                                <th>Product Name</th>
                                <th>Manufacture Name</th>
                                <th>Prescription Id</th>
                                
                                <th>Action</th>
                                {/* <th></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {/* private Long id;
                                private String productName;
                                private String productManufacturerName;
                                private Long prescriptionId; */}

                            {/* 2.display data on form  */}
                            {
                                users.map((user) =>(
                                    <tr> 
                                        {/* <th scope="row">{index + 1}</th> */}
                                        <td>{user.id}</td>
                                        <td>{user.productName}</td>
                                        <td>{user.productManufacturerName}</td>
                                        <td>{user.prescriptionId}</td>
                                        
                                        <td>
                                            {/* <Link className='btn btn-outline-success'>View</Link>
                                            {" "} */}
                                            <Link className='btn btn-outline-primary' to={`/CDAC_Project/ProductUpdate/${user.id}`}>
                                                Update</Link>
                                            {" "}
                                            <Link className='btn btn-outline-danger' onClick={() => deleteProduct(user.id)}>Delete</Link>
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
