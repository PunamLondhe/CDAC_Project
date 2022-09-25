
  import React, {useState, useEffect} from 'react'
  import { Container } from 'react-bootstrap'
  import axios from 'axios'
  import { useNavigate, useParams } from 'react-router-dom';
  import { Card, CardBody, CardHeader, Form, FormGroup,Row,Col,Label,Input,Button} from 'reactstrap'
  
  export default function DoctorQualificationForm() 
  {
      //8
      // let history = useHistory();
      const navigate = useNavigate();

      //11
        const {id} = useParams();
        // alert(id);


  
      //3
      const [user, setUser] = useState({
  
          //initial values
          id:'',
          employeeId:'',
          graduation:'',
          graduationCompletionYear:'',
          postGrad:'',
          postGradCompletionYear:'',
          additionalQualification:'',
          additionalQualificationCompletionYear:'',
          medicalRegistrationNo:'',
          experience:''
      });
  
      const {employeeId,graduation,graduationCompletionYear,postGrad,postGradCompletionYear,
          additionalQualification,additionalQualificationCompletionYear,medicalRegistrationNo,experience} = user
  
      // 5-----------------
      const onInputChange = e => {
          console.log(e.target.value)
  
          //6
          setUser({...user, [e.target.name] : e.target.value})
      }
  
      //7
      const onFormSubmit = async e => {
          e.preventDefault();
  
          //to add data
          await axios.post("http://localhost:8080/docQualifications", user);
  
          // 9 after data is submitted goto PatientList
          navigate('/CDAC_Project/DoctorQualificationList')
      }

      //12
useEffect(() => {
    loaddoc()
  },[])

//10 to load data of specific patient
const loaddoc = async () => {

    const result = await axios.get(`http://localhost:8080/docQualifications/${id}`)
    console.log(result)

    //14
    setUser(result.data)
  };

  //for Close
  const CloseForm = async (e) => {
    navigate('/CDAC_Project/DoctorQualificationList')
}

  
    return (
      <div>
          <Container style={{width:800}} className="mt-20">
              <Card>
                  <CardHeader>
                      <h3>Doctor Qualification Form</h3>
                  </CardHeader>
  
                  <CardBody>
                      <Form onSubmit={e => onFormSubmit(e)}>
                          <Row>
                          
                          <Col md={6}>
                              <FormGroup>
                                  <Label for="qualId">
                                  Doctor Qualification Id
                                  </Label>
                                  <Input
                                  id="qualId"
                                  name="id"
                                  placeholder=" Doctor Qualification Id"
                                  type="text"
                                  //4
                                  value={id}
                                  onChange={e => onInputChange(e)}
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
                                  name="employeeId"
                                  placeholder="Doctor Id as a Employee"
                                  type="  text"
                                  value={employeeId}
                                  onChange={e => onInputChange(e)}
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
                              value={graduation}
                              onChange={e => onInputChange(e)}
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
                                  name="graduationCompletionYear"
                                  placeholder="Enter Year"
                                  type="text"
                                  value={graduationCompletionYear}
                                  onChange={e => onInputChange(e)}
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
                              name="postGrad"
                              placeholder="Enter Post-graduation"
                              type="text"
                              value={postGrad}
                              onChange={e => onInputChange(e)}
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
                                  name="postGradCompletionYear"
                                  placeholder="Enter year"
                                  type="text"
                                  value={postGradCompletionYear}
                                  onChange={e => onInputChange(e)}
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
                              name="additionalQualification"
                              placeholder="Enter Additional Qualification"
                              type="text"
                              value={additionalQualification}
                              onChange={e => onInputChange(e)}
                              />
                          </FormGroup>
                          </Col>
                          <Col md={4}>
                              <FormGroup>
                                  <Label for="additional_qualification_complition_year">
                                  Complition Year
                                  </Label>
                                  <Input
                                  id="additional_qualification_complition_year"
                                  name="additionalQualificationCompletionYear"
                                  placeholder="Enter year"
                                  type="text"
                                  value={additionalQualificationCompletionYear}
                                  onChange={e => onInputChange(e)}
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
                                  name="medicalRegistrationNo"
                                  placeholder="Enter Medical Registration No"
                                  type="text"
                                  value={medicalRegistrationNo}
                                  onChange={e => onInputChange(e)}
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
                                  value={experience}
                                  onChange={e => onInputChange(e)}
                                  />
                              </FormGroup>
                          </Col>
                         
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
  