import React ,{useState} from 'react'
import axios from 'axios'

function DemoFetch() 
{
    const fetchData = () => {
        //console.log("Click");
        axios.get("http://date.jsontest.com/")
        //axios.get("http://192.168.0.106:8080/employees")
        .then((response)=>{
            console.log(response);
        })
    }
  return (
    <> 

        <form>
            <div className='form-group col-6'>
                <label>Date</label>
                <input type="text" name="Id" className='form-control' />
            </div>

            <div className='form-group col-6'>
                <label>Miliseconds</label>
                <input type="text" name="Name" className='form-control'/>
            </div>

            <div className='form-group col-6'>
                <label>Date</label>
                <input type="text" name="Email" className='form-control'/>
            </div>
        </form>


        <button className='btn btn-primary mt-3' onClick={fetchData}>FetchData</button>
    </>
  )
}

export default DemoFetch














// ----------------------------------------------------------------------------------
// import React, { Component } from 'react'

// export default class DemoFetch extends Component 
// {
//     constructor(props){
//         super(props)
//         this.state = {
//             list:[]
//         }
//         this.callAPI = this.callAPI.bind(this)
//         this.callAPI();
//     }

//     callAPI(){
//         fetch("http://date.jsontest.com/")
//         .then((response)=>response.json())
//         .then((data)=>{
//             console.log(data)

//             this.setState({
//                 list:data.data
//             })
//         })
//     }
//   render()
//   {
//     let tb_data = this.state.list && this.state.list.map((item)=>{
//         return(
//             <tr key={item.date}>
//                 <td>{item.date}</td>
//                 <td>{item.milliseconds_since_epoch}</td>
//                 <td>{item.time}</td>
//             </tr>
//         )
//     })

//     return (
//       <div className='container'>
//         <table className='table table-striped'>
//             <thead>
//                 <tr>
//                     <th>Date</th>
//                     <th>Seconds</th>
//                     <th>Time</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {tb_data}
//             </tbody>
//         </table>
//       </div>
//     )
//   }
// }
