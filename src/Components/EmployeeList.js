import React from 'react'

export default function EmployeeList() {
  return (
    <div className='container'>
        <form>
            <h2>Employee Details</h2>

            <div className='ui divider'></div>

            <div className='ui form'>
                <div className='field'>
                    <label>First Name</label>
                    <input type="text" name="firstname" placeholder='Enter First Name'/>
                </div>
            </div>
        </form>
    </div>
  )
}
