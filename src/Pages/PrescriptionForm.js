import React, {useState} from 'react'
import axios from 'axios';
import { Container } from 'react-bootstrap'
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom';

export default function PrescriptionForm() 
{
    //8
    const navigate = useNavigate();

    // 3--------------------------------
    const [user, setUser] = useState({
        
        id:'',
        patientId:'',
        prescriptionDate:'',
        frequency:'',
        duration:'',
        remarks:'',
        quantity:'',
        diagnosis:'',
        weight:'',
        bp:''
    })
    const {id,patientId,prescriptionDate,diagnosis,frequency,duration,remarks,quantity,weight,bp} = user

    // 5-----------------
    const onInputChange = e => {
        console.log(e.target.value)

        //6
        setUser({...user, [e.target.name] : e.target.value})
    }

    //7
    const onFormSubmit = async (e )=>{
        e.preventDefault();

        //to add data
        await axios.post("http://localhost:8080/prescriptions",user);

        // 9 after data is submitted goto List
        navigate('/CDAC_Project/PrescriptionList')
        // navigate('/CDAC_Project/PatientViewForDoctor/${patientId}')
    }


    //for Close
    const CloseForm = async (e) => {
        navigate('/CDAC_Project/PrescriptionList')
    }


  return (
    <div>
        <Container style={{width:800}} className="mt-20">
            <Card>
                <CardHeader>
                    <h3>Prescription Form</h3>
                </CardHeader>

                <CardBody>
                    <Form onSubmit={e => onFormSubmit(e)}>
                        <Row>
                        {/* <Col md={6}>
                            <FormGroup>
                                <Label for="prescription_id">
                                Prescription Id
                                </Label>
                                <Input
                                id="prescription_id"
                                name="id"
                                placeholder="Prescription Id"
                                type="text"
                                value={id}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col> */}
                        <Col md={6}>
                            <FormGroup>
                                <Label for="pId">
                                Patient Id
                                </Label>
                                <Input
                                id="pId"
                                name="patientId"
                                placeholder="Patient Id"
                                type="text"
                                value={patientId}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="prescription_date">
                                Date
                                </Label>
                                <Input
                                id="prescription_date"
                                name="prescriptionDate"
                                placeholder="Select Date"
                                type="date"
                                value={prescriptionDate}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>

                        <Col md={12}>
                            <FormGroup>
                                <Label for="diagnosis">
                                Diagnosis
                                </Label>
                                <Input
                                id="diagnosis"
                                name="diagnosis"
                                placeholder="Enter diagnosis"
                                type="textarea"
                                value={diagnosis}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Label for="weight">
                                Weight
                                </Label>
                                <Input
                                id="weight"
                                name="weight"
                                placeholder="Enter weight"
                                type="number"
                                value={weight}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="bp">
                                Blood Presure
                                </Label>
                                <Input
                                id="bp"
                                name="bp"
                                placeholder="Enter bp"
                                type="number"
                                value={bp}  
                                onChange={e => onInputChange(e)}
                                />
                            </FormGroup>
                        </Col>

                        {/* <Col md={4}>
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
                        </Col> */}

                        </Row>
                        
                        <Container>
                            <Button color="dark">
                                    Submit
                            </Button>
                            <Button color="dark" className='ms-2' type='reset' onClick={e => CloseForm(e)}>
                                    Close
                            </Button>
                        </Container>
                    </Form>


                    
                </CardBody>
            </Card>
        </Container>
    </div>
  )
}
