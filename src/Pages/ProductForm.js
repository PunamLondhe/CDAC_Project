// product_id int auto_increment,
// product_name varchar (100),
// product_manufacturer_name varchar (100),
// frequency varchar (20),
// remarks varchar (30),
// prescription_id int,



import React from 'react'
import { Container } from 'react-bootstrap'
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button} from 'reactstrap'

export default function ProductForm() 
{
  return (
    <div>
        <Container style={{width:600}} >
            <Card color='dark' outline className='mt-20'>
                <CardHeader>
                    <h3>Product Form</h3>
                </CardHeader>

                <CardBody>
                    <Form>
                        <Row className='mt-10'>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="productId">
                                Product Id
                                </Label>
                                <Input
                                id="productId"
                                name="productId"
                                placeholder="product Id"
                                type="text"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="prescription_id">
                                Prescription Id
                                </Label>
                                <Input
                                id="prescription_id"
                                name="prescription_id"
                                placeholder="Prescription Id"
                                type="text"
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
                                name="product_name"
                                placeholder="Enter Product Name"
                                type="text"
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
                                name="product_manufacturer_name"
                                placeholder="Enter Product Manufacture Name"
                                type="text"
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
                            type="number"
                            />
                        </FormGroup>
                        </Col>
                        
                        <Col md={8}>
                        <FormGroup>
                            <Label for="remark">
                            Remark
                            </Label>
                            <Input
                            id="remark"
                            name="remark"
                            placeholder="Enter Remark"
                            type='textarea'
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
