import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/NavBar';
import AddEmployee from './Components/AddEmployee';




function App() {
  return (
    <div>
      
    <NavBar/>
    <AddEmployee></AddEmployee>


      
     
      {/* <img src={require('./Images/background.jpg')}/> */}

      
    </div>
  );
}

export default App;
