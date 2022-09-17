// prescription_id int auto_increment,
// prescription_date date default (curdate()),
// diagnosis longtext,
// quantity tinyint,
// duration tinyint,
// frequency varchar (20),
// remarks varchar (30),
// patient_id int,


import React from 'react'
import { Container } from 'react-bootstrap'
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button} from 'reactstrap'

export default function PrescriptionForm() 
{
  return (
    <div>
        <Container style={{width:600}} className="mt-20">
            <Card>
                <CardHeader>
                    <h3>Prescription Form</h3>
                </CardHeader>

                <CardBody>
                    <Form>
                        <Row>
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
                                <Label for="pId">
                                Patient Id
                                </Label>
                                <Input
                                id="pId"
                                name="pId"
                                placeholder="Patient Id"
                                type="text"
                                />
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Label for="diagnosis">
                                Diagnosis
                                </Label>
                                <Input
                                id="diagnosis"
                                name="diagnosis"
                                placeholder="Enter diagnosis"
                                type="text"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="prescription_date">
                                Prescription Date
                                </Label>
                                <Input
                                id="prescription_date"
                                name="prescription_date"
                                placeholder="Select Date"
                                type="date"
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

                        
                        
                        
                        <Col md={12}>
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
