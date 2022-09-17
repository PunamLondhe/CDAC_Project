// doc_qualification_id int auto_increment,
// graduation varchar(100),
// graduation_complition_year year,
// post_grad varchar(100),
// post_grad_complition_year year,
// medical_registration_no long,
// additional_qualification varchar(100),
// additional_qualification_complition_year year,
// experience tinyint,
// emp_id int unique,


import React from 'react'
import { Container } from 'react-bootstrap'
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button} from 'reactstrap'

export default function DoctorQualificationForm() 
{
  return (
    <div>
        <Container style={{width:800}} className="mt-20">
            <Card>
                <CardHeader>
                    <h3>Doctor Qualification Form</h3>
                </CardHeader>

                <CardBody>
                    <Form>
                        <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="qualId">
                                Doctor Qualification Id
                                </Label>
                                <Input
                                id="qualId"
                                name="qualId"
                                placeholder=" Doctor Qualification Id"
                                type="  text"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="empId">
                                Doctor Id
                                </Label>
                                <Input
                                id="empId"
                                name="empId"
                                placeholder="Doctor Id as a Employee"
                                type="  text"
                                />
                            </FormGroup>
                        </Col>
                        
                        <Col md={8}>
                        <FormGroup>
                            <Label for="graduation">
                            Graduation
                            </Label>
                            <Input
                            id="graduation"
                            name="graduation"
                            placeholder="Enter graduation"
                            type="text"
                            />
                        </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="graduation_complition_year">
                                Complition Year
                                </Label>
                                <Input
                                id="graduation_complition_year"
                                name="graduation_complition_year"
                                placeholder="Enter Year"
                                type="text"
                                />
                            </FormGroup>
                        </Col>

                        <Col md={8}>
                        <FormGroup>
                            <Label for="post_grad">
                            Post-Graduation
                            </Label>
                            <Input
                            id="post_grad"
                            name="post_grad"
                            placeholder="Enter Post-graduation"
                            type="text"
                            />
                        </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="post_grad_complition_year">
                                Complition Year
                                </Label>
                                <Input
                                id="post_grad_complition_year"
                                name="post_grad_complition_year"
                                placeholder="Enter year"
                                type="text"
                                />
                            </FormGroup>
                        </Col>

                        
                        <Col md={8}>
                        <FormGroup>
                            <Label for="additional_qualification">
                            Additional Qualification
                            </Label>
                            <Input
                            id="additional_qualification"
                            name="additional_qualification"
                            placeholder="Enter Additional Qualification"
                            type="text"
                            />
                        </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="additional_qualification_complition_year">
                                Qualification Complition Year
                                </Label>
                                <Input
                                id="additional_qualification_complition_year"
                                name="additional_qualification_complition_year"
                                placeholder="Enter year"
                                type="text"
                                />
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Label for="medical_registration_no">
                                Medical Registration No
                                </Label>
                                <Input
                                id="medical_registration_no"
                                name="medical_registration_no"
                                placeholder="Enter Medical Registration No"
                                type="text"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="experience">
                                Experiance
                                </Label>
                                <Input
                                id="experience"
                                name="experience"
                                placeholder="Enter Experiance"
                                type="number"
                                />
                            </FormGroup>
                        </Col>
                       
                        </Row>
                        
                        <Container>
                            <Button color="dark">
                                    Register
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
