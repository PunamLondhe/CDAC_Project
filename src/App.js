import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/NavBar';
import AddEmployee from './Components/AddEmployee';
import Demp from './Components/Demp';
import DemoFetch from './Components/DemoFetch';
import EmployeeList from './Components/EmployeeList';
import Login from './Components/Login';

import ClinicForm from './Pages/ClinicForm';
import ClinicList from './Pages/ClinicList';
import ClinicUpdate from './Pages/ClinicUpdate'


import PatientForm from './Pages/PatientForm';
import PatientList from './Pages/PatientList'
import PatientUpdate from './Pages/PatientUpdate'

import PrescriptionForm from './Pages/PrescriptionForm';
import DoctorQualificationForm from './Pages/DoctorQualificationForm';
import ProductForm from './Pages/ProductForm';

//for messaging
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/CDAC_Project/" element={<ClinicList />}/>
        <Route path="/CDAC_Project/ClinicForm" element={<ClinicForm />}/>
        <Route path="/CDAC_Project/ClinicUpdate/:id" element={<ClinicUpdate />}/>

        <Route path="/CDAC_Project/PatientForm" element={<PatientForm />}/>
        <Route path="/CDAC_Project/PatientList" element={<PatientList />}/>
        <Route path="/CDAC_Project/PatientUpdate/:id" element={<PatientUpdate />}/>


        <Route path="/CDAC_Project/PrescriptionForm" element={<PrescriptionForm />}/>
        <Route path="/CDAC_Project/DoctorQualificationForm" element={<DoctorQualificationForm />}/>

        <Route path="/CDAC_Project/ProductForm" element={<ProductForm />}/>
        

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
