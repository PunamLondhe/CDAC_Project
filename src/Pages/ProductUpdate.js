import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button} from 'reactstrap'
import { useState } from 'react'

export default function ProductForm() 
{
    //8
    // let history = useHistory();
    const navigate = useNavigate();

    //11
    const {id} = useParams();
    // alert(id);

    // 3--------------------------------
    const [user, setUser] = useState({

        //initial values
        id:'',
        prescriptionId:'',
        productName:'',
        productManufacturerName:'',
        frequency:'',
        duration:'',
        remarks:'',
        quantity:''
    });
    const {prescriptionId,productName,productManufacturerName,frequency,duration,remarks,quantity} = user;

    // 5-----------------
    const onInputChange = e => {
        console.log(e.target.value)

        //6
        setUser({...user, [e.target.name] : e.target.value})
    }

    //12
    useEffect(() => {
        loadProduct()
      },[])
  

    //7
    const onFormSubmit = async (e )=>{
        e.preventDefault();

        //to add data
        await axios.post("http://localhost:8080/products",user);

        // 9 after data is submitted goto PatientList
        //history.push("/CDAC_Project/PatientList")
        navigate('/CDAC_Project/ProductList')
    }


    //10 to load data of specific patient
    const loadProduct = async () => {

        const result = await axios.get(`http://localhost:8080/products/${id}`)
        console.log(result)
  
        //14
        setUser(result.data)
      };

  return (
    <div>
        <Container style={{width:800}} >
            <Card color='dark' outline className='mt-20'>
                <CardHeader>
                    <h3>Product Form</h3>
                </CardHeader>

                <CardBody>
                    <Form onSubmit={e => onFormSubmit(e)}>
                        <Row className='mt-10'>
                        {/* <Col md={6}>
                            <FormGroup>
                                <Label for="productId">
                                Product Id
                                </Label>
                                <Input
                                id="productId"
                                name="id"
                                placeholder="product Id"
                                type="text"

                                // 4------------------------
                                value={id}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col> */}
                        <Col md={12}>
                            <FormGroup>
                                <Label for="prescription_id">
                                Prescription Id
                                </Label>
                                <Input
                                id="prescription_id"
                                name="prescriptionId"
                                placeholder="Prescription Id"
                                type="text"
                                value={prescriptionId}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        

                        <Col md={6}>
                            <FormGroup>
                                <Label for="product_name">
                                Product Name
                                </Label>
                                <Input
                                id="product_name"
                                name="productName"
                                placeholder="Enter Product Name"
                                type="text"
                                value={productName}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="product_manufacturer_name">
                                Product Manufacture Name
                                </Label>
                                <Input
                                id="product_manufacturer_name"
                                name="productManufacturerName"
                                placeholder="Enter Product Manufacture Name"
                                type="text"
                                value={productManufacturerName}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                        <FormGroup>
                            <Label for="quantity">
                            Quantity
                            </Label>
                            <Input
                            id="quantity"
                            name="quantity"
                            placeholder="Select Quantity"
                            type="number"
                            value={quantity}  
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={4}>
                        <FormGroup>
                            <Label for="duration">
                            Duration
                            </Label>
                            <Input
                            id="duration"
                            name="duration"
                            placeholder="Select Duration"
                            type="number"
                            value={duration}  
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={4}>
                        <FormGroup>
                            <Label for="frequency">
                            Frequency
                            </Label>
                            <Input
                            id="frequency"
                            name="frequency"
                            placeholder="Select Frequency"
                            type="text"
                            value={frequency}  
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={12}>
                        <FormGroup>
                            <Label for="remark">
                            Remark
                            </Label>
                            <Input
                            id="remark"
                            name="remarks"
                            placeholder="Enter Remark"
                            type='textarea'
                            value={remarks}  
                            onChange={e => onInputChange(e)}
                            />
                        </FormGroup>
                        </Col>


                        </Row>
                        
                        <Container>
                            <Button color="dark">
                                    Submit
                            </Button>
                            <Button color="dark" className='ms-2' type='reset'>
                                    Clear
                            </Button>
                        </Container>
                    </Form>


                    
                </CardBody>
            </Card>
        </Container>
    </div>
  )
}
