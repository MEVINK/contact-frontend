import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


function Add() {
  const[id,setId]=useState("")
  const[name,setName]=useState("")
  const[age,setAge]=useState("")
  const[phone,setphone]=useState("")
  const[email,setemail]=useState("")

  const base_url='http://localhost:8000/add-contact'

   const location =useNavigate() //component to component navigATE

  const Addcontact=(e)=>{
    e.preventDefault()
    console.log(id,name,age,phone,email);
    //api call
    const body={
      id,name,age,phone,email
    }
    const result =axios.post(base_url,body).then((response)=>{
      console.log(response);
      alert(response.data.message) //contact added successfully
      location('/admin')
    })
    .catch((erroe)=>{
      alert("please enter a unique ID")
    })
   
    

  }
  return (
    <div>
       <div>
       <h1 className='m-3'>Add your contact</h1>
       <p className='container'>
       "Some components of a contact note include: Date and time of contact. Name of the person you're communicating with and their relationship to the client. The reason for the communication."
       
       </p>
        <div className='container d-flex m-3 p-3'>
            <img src="https://i.pinimg.com/736x/31/1c/a2/311ca2dfbf044c41a3fb7fa79f911c7b.jpg" alt="" />

                <img src="https://img.freepik.com/premium-vector/concept-illustration-contact-phone-book-apps_108061-1577.jpg" alt="" /> 
        </div>
    <div className='container bg-light'>
      
    <form className='p-2 mx-2 border shadow bg-light'>
      <img  width={400} src="https://static.vecteezy.com/system/resources/previews/027/309/403/original/office-employee-with-ai-generated-free-png.png" alt="" />
      
       <h3 className='container text-center mt-5'> Enter  your Details</h3>
    <br />
    <MDBInput  onChange={(e)=>setId(e.target.value)}  label='id' id='form1' type='text' /> <br />
    <MDBInput  onChange={(e)=>setName(e.target.value)}  label='name' id='form1' type='text' /> <br />
    <MDBInput  onChange={(e)=>setAge(e.target.value)}  label='Age' id='form1' type='text' /> <br />
    <MDBInput  onChange={(e)=>setphone(e.target.value)}  label='phone' id='form1' type='text' />  <br />
    <MDBInput  onChange={(e)=>setemail(e.target.value)}  label='email' id='form1' type='text' /> <br /> <br />
    
    
    <div>
      <button onClick={(e)=>Addcontact(e)} className='btn btn-parimary' >Add</button>
    </div>
    </form>
  </div>

  </div> </div>
  )
}

export default Add