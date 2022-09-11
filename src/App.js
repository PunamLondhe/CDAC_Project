import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import EmployeeList from './Components/EmployeeList';


function App() {
  return (
    <div>
      
      <NavBar/>

      {/* <input name="" id="" className='btn btn-warning'type="button" value="Next"/> */}
     
      <img src={require('./Images/background.jpg')}/>

      {/* <EmployeeList></EmployeeList> */}
    </div>
  );
}

export default App;
