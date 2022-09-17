import React, { Component } from 'react'

export default class EmployeeList extends Component 
{
    constructor(props) {
        super(props)
        this.state = {
          users: [],
          isLoading: false,
          isError: false
        }
      }

      //async function get request
      async componentDidMount() {
        this.setState({ isLoading: true })

        //const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const response = await fetch('http://localhost:8080/employees')
        console.log(response)
        if (response.ok) {
          const users = await response.json()
          //console.log(users)      //shows data into json format
          this.setState({ users, isLoading: false })
        } else {
          this.setState({ isError: true, isLoading: false })
         }
      }

      renderTableHeader = () => {
        return Object.keys(this.state.users[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
      }

      renderTableRows = () => {
        return this.state.users.map(user => {
          return (
            
                // <tr key={user.id}>
                //     <td>{user.id}</td>
                //     <td>{user.name}</td>
                //     <td>{user.username}</td>
                //     <td>{user.email}</td>
                //     <td>{`${user.address.street}, ${user.address.city}`}</td>
                //     <td>{user.phone}</td>
                //     <td>{user.website}</td>
                //     <td>{user.company.name}</td>  
                // </tr>


              // ------------------------------------------
              // <table>
              //   {/* <thead>
              //     <tr>
              //       <th>Id</th>
              //       <th>First Name</th>
              //       <th>Last Name</th>
              //       <th>Mobile</th>
              //       <th>Email</th>
              //       <th>Birth Date</th>
              //       <th>Address</th>
              //       <th>Salary</th>
              //       <th>Hire Date</th>
              //       <th>Designation</th>
              //       <th>Department</th>
              //       <th>Clinic Id</th>
              //     </tr>
              //   </thead> */}
              //   <tbody>
                <tr key={user.empId}>
                    <td>Id{user.empId}</td>
                    <td>{user.empFirstName}</td>
                    <td>{user.empLastName}</td>
                    <td>{user.mobile}</td>
                    <td>{user.email}</td>
                    {/* <td>{`${user.address.street}, ${user.address.city}`}</td> */}
                    
                    <td>{user.dob}</td>
                    <td>{user.address}</td> 
                    <td>{user.salary}</td>
                    <td>{user.hiring_date}</td>
                    <td>{user.designation}</td> 
                    <td>{user.departmentName}</td> 
                    <td>{user.clinicId}</td> 
              </tr>
              //   </tbody>
              // </table>
              
          )
        })
      }

  render() 
  {
    const { users, isLoading, isError } = this.state
 
    if (isLoading) {
      return <div>Loading...</div>
    }
 
    if (isError) {
      return <div>Error....</div>
    }

    return users.length > 0
    ? (
      <table className='table table-striped'>
        <thead>
          <tr>
            {this.renderTableHeader()}
          </tr>
        </thead>
        <tbody>
          {this.renderTableRows()}
        </tbody>
      </table>
    ) : (
      <div>
        No users.
    </div>
    )
  }
}
