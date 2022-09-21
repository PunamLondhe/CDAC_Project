import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/NavBar';
import AddEmployee from './Components/AddEmployee';
import Demp from './Components/Demp';
import DemoFetch from './Components/DemoFetch';
import Login from './Components/Login';

import EmployeeList from './Pages/EmployeeList';
import EmployeeForm from './Pages/EmployeeForm';
import EmployeeUpdate from './Pages/EmployeeUpdate';
import EmployeeView from './Pages/EmployeeView';

import ClinicForm from './Pages/ClinicForm';
import ClinicList from './Pages/ClinicList';
import ClinicUpdate from './Pages/ClinicUpdate'


import PatientForm from './Pages/PatientForm';
import PatientList from './Pages/PatientList'
import PatientUpdate from './Pages/PatientUpdate'

import PrescriptionForm from './Pages/PrescriptionForm';
import PrescriptionList from './Pages/PrescriptionList';
import PrescriptionView from './Pages/PrescriptionView';
import PrescriptionUpdate from './Pages/PrescriptionUpdate';

import DoctorQualificationForm from './Pages/DoctorQualificationForm';
import DoctorQualificationList from './Pages/DoctorQualificationList'
import DoctorQualificationUpdate from './Pages/DoctorQualificationUpdate';

import ProductForm from './Pages/ProductForm';
import ProductList from './Pages/ProductList';
import ProductUpdate from './Pages/ProductUpdate';

import DepartmentList from './Pages/DepartmentList';
import DepartmentForm from './Pages/DepartmentForm';
import DepartmentUpdate from './Pages/DepartmentUpdate';


import ClinicView from './Pages/ClinicPerspective/ClinicView';
import DeptList from './Pages/ClinicPerspective/DeptList';


//Doctor Perspective
import PatientListForDoctor from './Pages/DoctorPerspective/PatientListForDoctor';
import PatientViewForDoctor from './Pages/DoctorPerspective/PatientViewForDoctor';

//for messaging
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <br></br>
      <Routes>
        <Route path="/CDAC_Project/ClinicList" element={<ClinicList />}/>
        <Route path="/CDAC_Project/ClinicForm" element={<ClinicForm />}/>
        <Route path="/CDAC_Project/ClinicUpdate/:id" element={<ClinicUpdate />}/>

        <Route path="/CDAC_Project/EmployeeList" element={<EmployeeList />}/>
        <Route path="/CDAC_Project/EmployeeForm" element={<EmployeeForm />}/>
        <Route path="/CDAC_Project/EmployeeUpdate/:id" element={<EmployeeUpdate />}/>
        <Route path="/CDAC_Project/EmployeeView/:id" element={<EmployeeView />}/>


        <Route path="/CDAC_Project/PatientForm" element={<PatientForm />}/>
        <Route path="/CDAC_Project/PatientList" element={<PatientList />}/>
        <Route path="/CDAC_Project/PatientUpdate/:id" element={<PatientUpdate />}/>

        PrescriptionUpdate
        <Route path="/CDAC_Project/PrescriptionForm" element={<PrescriptionForm />}/>
        <Route path="/CDAC_Project/PrescriptionList" element={<PrescriptionList />}/>
        <Route path="/CDAC_Project/PrescriptionView/:id" element={<PrescriptionView />}/>
        <Route path="/CDAC_Project/PrescriptionUpdate/:id" element={<PrescriptionUpdate />}/>


        <Route path="/CDAC_Project/DoctorQualificationForm" element={<DoctorQualificationForm />}/>
        <Route path="/CDAC_Project/DoctorQualificationList" element={<DoctorQualificationList />}/>
        <Route path="/CDAC_Project/DoctorQualificationUpdate/:id" element={<DoctorQualificationUpdate />}/>

        <Route path="/CDAC_Project/ProductForm" element={<ProductForm />}/>
        <Route path="/CDAC_Project/ProductList" element={<ProductList />}/>
        <Route path="/CDAC_Project/ProductUpdate/:id" element={<ProductUpdate />}/>
        
        <Route path="/CDAC_Project/DepartmentList" element={<DepartmentList />}/>
        <Route path="/CDAC_Project/DepartmentForm" element={<DepartmentForm />}/>
        <Route path="/CDAC_Project/DepartmentUpdate/:id" element={<DepartmentUpdate />}/>


        {/* Docter Perspective  */}
        <Route path="/CDAC_Project/PatientListForDoctor" element={<PatientListForDoctor />}/>
        <Route path="/CDAC_Project/PatientViewForDoctor/:id" element={<PatientViewForDoctor />}/>


        {/* ClinicPerspective */}
        <Route path="/CDAC_Project/ClinicView/:id" element={<ClinicView />}/>
        <Route path="/CDAC_Project/DeptList" element={<DeptList />}/>

      </Routes>
    </BrowserRouter>
    
    // <div>
    //   <ToastContainer position='bottom-center'></ToastContainer>
    //   {/* <NavBar/> */}
    //   {/* <Demp></Demp> */}
    //   {/* <DemoFetch></DemoFetch> */}
      
    //   {/* <AddEmployee></AddEmployee> */}
    //   {/* <EmployeeList></EmployeeList> */}

    //   {/* <Login></Login> */}

    //   {/* <ClinicForm></ClinicForm> */}
    //   {/* <ClinicList></ClinicList> */}
    //   <ClinicUpdate></ClinicUpdate>
    //   {/* <PatientForm></PatientForm> */}
    //   {/* <PrescriptionForm></PrescriptionForm> */}
    //   {/* <DoctorQualificationForm></DoctorQualificationForm> */}
    //   {/* <ProductForm></ProductForm> */}


    
    // </div>
  );
}

export default App;
