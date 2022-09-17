import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button} from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import { Clinicregister } from '../Services/Clinic_Service';
import { useParams } from "react-router-dom";
import axios from 'axios'

export default function ClinicUpdate() 
{
    const {id} = useParams();
    //alert(id);

    const[data, setData] = useState({
        
        clinicId:'',
        clinicName:'',
        clinicMTime:'',
        clinicATime:'',
        clinicAddress:'',
        clinicETime:'',
        clinicPhone:'',
        registrationDate:''
    })

    //If any error occured
    const [error,setError] = useState({
        errors:{},
        isError:false
    })

    //it is a hook..to print data on console in json format
    // useEffect(()=>{
    //     console.log(data);
    // },[data])

    const handleChange = (event,property) => {
        //console.log("Name Changed");
        //console.log(event.target.value);        //to see actual field value on console

        //dynamic setting the values
        setData({...data,[property]:event.target.value})
    }

    //reset the form
    const resetData = () => {
        setData({
            clinicId:'',
            clinicName:'',
            clinicMTime:'',
            clinicATime:'',
            clinicAddress:'',
            clinicETime:'',
            clinicPhone:'',
            registrationDate:''
        })
    }

    //submit form
    // const submitForm = (event) =>{
    //     event.preventDefault()      //stops the default behaviour of form

    //     if(error.isError){
    //         toast.error("Details are Invalid..Please Correct First...!");
    //         return;
    //     }
    //     console.log(data);

    //     //data validation

    //     //call server api for sending data
    //     Clinicregister(data).then((resp)=>{
    //         console.log(resp);
    //         console.log("Success")

    //         toast.success("You are registered successfully...!");
    //         setData({
    //             clinicId:'',
    //             clinicName:'',
    //             clinicMTime:'',
    //             clinicATime:'',
    //             clinicAddress:'',
    //             clinicETime:'',
    //             clinicPhone:'',
    //             registrationDate:''
    //         })
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         console.log("Error")

    //         //handle errors
    //         setError({
    //             errors:error,
    //             isError:true
    //         })
    //     });
    // }


    const submitForm = async e => {
        e.preventDefault();
        await axios.put("http://localhost:8080/clinics/" + data);
        // console.log(data);
        // history.push("/");
    }

    useEffect(()=>{
        loadUser()
    },[])

    //for Update
    const loadUser = async () => {
    const result = await axios.get("http://localhost:8080/clinics/" + id)
        console.log(result);

        //this show the data of perticular id into form.
        setData(result.data);
    }


  return (
    <div>
        <Container style={{width:600}} className="mt-20">

            {/* print data on form  */}
            {/* {JSON.stringify(data)} */}

            <Card color='dark' outline className='mt-20'>
                <CardHeader>
                    <h3>Clinic Update Form</h3>
                </CardHeader>

                <CardBody>
                    <Form onSubmit={submitForm}>
                        <Row>
                        <Col md={8}>
                            <FormGroup>
                                <Label for="clinicId">
                                Clinic Id
                                </Label>
                                <Input
                                id="clinicId"
                                name="clinicId"
                                placeholder="Clinic Id"
                                type="text"
                                onChange={(e)=>handleChange(e,'clinicId')}
                                value={data.id}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="clinicMTime">
                                Clinic Morning Time
                                </Label>
                                <Input
                                id="clinicMTime"
                                name="clinicMTime"
                                placeholder="Morining Time"
                                type="text"
                                onChange={(e)=>handleChange(e,'clinicMTime')}
                                value={data.morningTime}
                                />
                            </FormGroup>
                        </Col>
                        
                        <Col md={8}>
                        <FormGroup>
                            <Label for="clinicName">
                            Clinic Name
                            </Label>
                            <Input
                            id="clinicName"
                            name="clinicName"
                            placeholder="Enter Clinic name"
                            type="text"
                            onChange={(e)=>handleChange(e,'clinicName')}
                            value={data.clinicName}
                            //invalid={error.errors?.resp?.data?.clinicName ? true:false}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="clinicATime">
                                Clinic Afternoon Time
                                </Label>
                                <Input
                                id="clinicATime"
                                name="clinicATime"
                                placeholder="Afternoon Time"
                                type="text"
                                onChange={(e)=>handleChange(e,'clinicATime')}
                                value={data.afternoonTime}
                                />
                            </FormGroup>
                        </Col>

                        <Col md={8}>
                        <FormGroup>
                            <Label for="clinicAddress">
                            Address
                            </Label>
                            <Input
                            id="clinicAddress"
                            name="clinicAddress"
                            placeholder="Enter Address"
                            type='textarea'
                            onChange={(e)=>handleChange(e,'clinicAddress')}
                            value={data.clinicAddress}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="clinicETime">
                                Clinic Evening Time
                                </Label>
                                <Input
                                id="clinicETime"
                                name="clinicETime"
                                placeholder="Evening Time"
                                type="text"
                                onChange={(e)=>handleChange(e,'clinicETime')}
                                value={data.eveningTime}
                                />
                            </FormGroup>
                        </Col>
                        

                        <Col md={8}>
                        <FormGroup>
                            <Label for="clinicPhone">
                            Phone Number
                            </Label>
                            <Input
                            id="clinicPhone"
                            name="clinicPhone"
                            placeholder="Enter Phone Number"
                            onChange={(e)=>handleChange(e,'clinicPhone')}
                            value={data.clinicPhone}
                            />
                        </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="registrationDate">
                                Registration Date
                                </Label>
                                <Input
                                id="registrationDate"
                                name="registrationDate"
                                placeholder="Select Date"
                                type="date"
                                onChange={(e)=>handleChange(e,'registrationDate')}
                                value={data.registrationDate}
                                />
                            </FormGroup>
                        </Col>
                        </Row>
                        
                        <Container>
                            <Button color="dark">
                                    Update
                            </Button>
                            <Button color="dark" className='ms-2' type='reset' onClick={resetData}>
                                    Reset
                            </Button>
                        </Container>
                    </Form>


                    
                </CardBody>
            </Card>
        </Container>
    </div>
  )
}
