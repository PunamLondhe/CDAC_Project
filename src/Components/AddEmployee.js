import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios';

import {
    Modal,
    Button,
    DropdownButton,
    Dropdown,
  } from "react-bootstrap";


 const validateEmployee=(empData)=>{
    const errors={}
    let pattern=/^([a-zA-Z]+)$/

    if(!empData.FName)
        errors.FName="Please enter your First Name...!"
    else if(!pattern.test(empData.FName))
        errors.FName="Only Alphabets are allowed."

    if(!empData.LName)
        errors.LName="Please enter your Last Name...!"
    else if(!pattern.test(empData.LName))
        errors.LName="Only Alphabets are allowed."


    let pattern1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(!empData.Email)
        errors.Email = "Please enter Email Id...!"
    else if (!pattern1.test(empData.Email))
        errors.Email="Inavlid Email...Please enter Correct Format."

    let pattern2 = /^[7-9]{1}[0-9]{9}$/
    if(!empData.Mobile)
        errors.Mobile = "Please enter Mobile Number...!"
    else if (!pattern2.test(empData.Mobile))
        errors.Mobile="Invalid Number...Please enter Correct Number."

    if(!empData.Address)
        errors.Address = "Please enter your address...!"
    // else if (!pattern2.test(empData.Mobile))
    //     errors.Address="Invalid Number...Please Enter Correct Number."

    if(!empData.Designation)
        errors.Designation = "Please enter your Designation...!"

    if(!empData.HireDate)
        errors.HireDate = "Please enter your Date...!"

    if(empData.Salary.length==0)
        errors.Salary="Enter salary...!"
    else if(isNaN(empData.Salary))
        errors.Salary="Salary should be number only"

     return errors
}


export default function AddEmployee() 
{
    const formik = useFormik({
        initialValues:{Id:'',FName:'',LName:'',Email:'',Mobile:'',Address:'',Designation:'',HireDate:'',Salary:''},
        validate:validateEmployee,
        onSubmit:(values)=>{alert(JSON.stringify(values))}

        
    })

    const apiGet = () =>{
        // fetch('http://localhost:8080/employees')
        // .then((response)=>response.json())
        // .then((json)=>console.log(json));

        axios.post('http://localhost:8080/employees',this.state.initialValues)
        .then((res)=>console.log(res))
        .catch(()=>console.log('not inserted'))
    };

  return (
    <div>
        <h3>Add Employee</h3>
        <form onSubmit={formik.handleSubmit}>
            {/* <div className='form-group col-6'>
                <label>Employee ID</label>
                <input type="text" name="Id" className='form-control' value={formik.values.Id}
                onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            </div> */}

            <div className='form-group col-6'>
                <label><b>First Name</b></label>
                <input type="text" name="FName" className='form-control'  value={formik.values.FName}
                onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.FName?<span className="text-danger">{formik.errors.FName}</span>:null}
            </div>

            <div className='form-group col-6'>
                <label><b>Last Name</b></label>
                <input type="text" name="LName" className='form-control'  value={formik.values.LName}
                onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.LName?<span className="text-danger">{formik.errors.LName}</span>:null}
            </div>
    
            <div className='form-group col-6'>
                <label><b>Email</b></label>
                <input type="text" name="Email" className='form-control' value={formik.values.Email}
                onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.errors.Email ? <span className='text-danger'>{formik.errors.Email}</span> : null}
            </div>

            <div className='form-group col-6'>
                <label><b>Mobile</b></label>
                <input type="text" name="Mobile" className='form-control' value={formik.values.Mobile}
                onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.errors.Mobile ? <span className='text-danger'>{formik.errors.Mobile}</span> : null}
            </div>

            <div className='form-group col-6'>
                <label><b>Address</b></label>
                <input type="textarea" name="Address" className='form-control' value={formik.values.Address}
                onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.errors.Address ? <span className='text-danger'>{formik.errors.Address}</span> : null}
            </div>

            <div className='form-group col-6'>
                <label><b>Designation</b></label>
                <input type="text" name="Designation" className='form-control' value={formik.values.Designation}
                onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.errors.Designation ? <span className='text-danger'>{formik.errors.Designation}</span> : null}
            </div>

            <div className='form-group col-6'>
                <label><b>Hire Date</b></label>
                <input type="text" name="HireDate" className='form-control' value={formik.values.HireDate}
                onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.errors.HireDate ? <span className='text-danger'>{formik.errors.HireDate}</span> : null}
            </div>

            <div className='form-group col-6'>
                <label><b>Salary</b></label>
                <input type="text" name="Salary" className='form-control' value={formik.values.Salary}
                onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                 {formik.errors.Salary?<span className="text-danger">{formik.errors.Salary}</span>:null}
            </div>
            

            {/* ====================================role================================= */}
          {/* <DropdownButton
            size="sm"
            title={role}
            style={{ marginTop: "10px" }}
            variant="warning"
          >
            <Dropdown.Item as="Button">
              <div
                onClick={(e) => {
                  setDoctorOptionFlag(false);
                  setRole(e.target.innerText);
                }}
              >
                admin
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div
                onClick={(e) => {
                  setDoctorOptionFlag(false);
                  setRole(e.target.innerText);
                }}
              >
                accountant
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div
                onClick={(e) => {
                  setDoctorOptionFlag(false);
                  setRole(e.target.innerText);
                }}
              >
                reception
              </div>
            </Dropdown.Item>
           
            <Dropdown.Item>
              <div
                onClick={(e) => {
                  setDoctorOptionFlag(true);
                  setRole(e.target.innerText);
                  // adding additional functionalities of doctor
                }}
              >
                doctor
              </div>
            </Dropdown.Item>
          </DropdownButton> */}


            <button className='btn btn-primary mt-2' onClick={apiGet}>Add Employee</button> 
        </form>
    </div>
  )
}

