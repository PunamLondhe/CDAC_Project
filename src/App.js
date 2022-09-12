import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/NavBar';
import AddEmployee from './Components/AddEmployee';
import Demp from './Components/Demp';
import DemoFetch from './Components/DemoFetch';
import EmployeeList from './Components/EmployeeList';




function App() {
  return (
    <div>
      
    <NavBar/>
    <Demp></Demp>
    {/* <DemoFetch></DemoFetch> */}
    
    {/* <AddEmployee></AddEmployee> */}
    {/* <EmployeeList></EmployeeList> */}

      
     
      {/* <img src={require('./Images/background.jpg')}/> */}

      
    </div>
  );
}

export default App;
