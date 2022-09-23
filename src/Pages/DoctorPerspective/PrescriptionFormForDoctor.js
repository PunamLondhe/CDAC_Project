import React, {useState} from 'react'
import axios from 'axios';
import { Container } from 'react-bootstrap'
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import { Modal, ModalHeader } from 'reactstrap';

export default function PrescriptionFormForDoctor() 
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
        diagnosis:'',
        quantity:''
    })
    const {id,patientId,prescriptionDate,frequency,duration,remarks,diagnosis,quantity} = user

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
        // navigate('/CDAC_Project/PatientViewForDoctor/${id}')
    }

    // -------------------------------Model------------------
    const [modal,setModal] = useState(false)

  return (
    <div>
        <Container style={{width:600}} className="mt-20">
            <Card>
                <CardHeader>
                    <h3>Prescription Form</h3>
                </CardHeader>

                <CardBody>
                    <Form onSubmit={e => onFormSubmit(e)}>
                        <Row>
                        <Col md={6}>
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
                        </Col>
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
                                <Label for="diagnosis">
                                Diagnosis
                                </Label>
                                <Input
                                id="diagnosis"
                                name="diagnosis"
                                placeholder="Enter diagnosis"
                                type="text"
                                value={diagnosis}  
                                onChange={e => onInputChange(e)}
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
                                name="prescriptionDate"
                                placeholder="Select Date"
                                type="date"
                                value={prescriptionDate}  
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

                            <Button color="success" className='mt-2' onClick={ () => setModal(true)}>
                            + Prescription
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
