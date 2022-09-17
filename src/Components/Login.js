import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Login() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[email,setEmail]=useState('')
    const[password,setpassword]=useState('')
    //for fetching data
    // const[details,setDetails]=useState([])

     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const login={email, password}
    console.log(login)

    
  //   fetch("http://localhost:8080/student/add",{
  //     method:"POST",
  //     headers:{"Content-Type":"application/json"},
  //     body:JSON.stringify(student)

  // }).then(()=>{
  //   console.log("New Student added")
  // })
  }

// useEffect(()=>{
//   fetch("http://localhost:8080/student/getAll")
//   .then(res=>res.json())
//   .then((result)=>{
//     setStudents(result);
//   }
// )
// },[])

  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}>Login Here</h1>
            <hr></hr>

    <form className={classes.root} noValidate autoComplete="off">
    
        <TextField id="outlined-basic" label="Enter Email" variant="outlined" fullWidth 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <TextField id="outlined-basic" label="Enter Password" variant="outlined" fullWidth
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleClick}>
        Submit
        </Button>
    </form>
   
    </Paper>

    {/* <h1>Students</h1> */}

    {/* <Paper elevation={3} style={paperStyle}>

      {students.map(student=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
         Id:{student.id}<br/>
         Name:{student.name}<br/>
         Address:{student.address}

        </Paper>
      ))
}


    </Paper> */}



    </Container>
  );
}