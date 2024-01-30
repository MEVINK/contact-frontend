import React, {useEffect, useState} from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'


function Edit() {
  const[conid,setId]=useState("")
  const[conname,setName]=useState("")
  const[conage,setAge]=useState("")
  const[conphone,setphone]=useState("")
  const[conemail,setemail]=useState("")

  //get a perticular contact 

  const {id}=useParams()
  console.log(id);
  const base_url='http://localhost:8000'

  //get a perticular contact
  const getContact=async(id)=>{
    
    const result =await axios.get(`${base_url}/get-a-contact/${id}`)
    console.log(result.data.agents);

    setId(result.data.agents.id)
    setName(result.data.agents.name)
    setAge(result.data.agents.age)
    setphone(result.data.agents.phone)
    setemail(result.data.agents.email)
    

  }

  useEffect(()=>{
 getContact(id)
  },[])
  const location=useNavigate()

  const  updatecontact=async(e)=>{
    e.preventDefault()
    const body={
      id:conid,
      name:conname,
      age:conage,
      phone:conphone,
      email:conemail}
    const result=await axios.post(`${base_url}/update-a-contact/${id}`,body)
    console.log(result);
    alert(result.data.message)
    location('/admin')

  }

  



  return (
    <div>
         <div>
       <h1 className='m-3'>UPDATE YOUR CONTACT</h1>
      
      
    <div className='container bg-light'>
      
    <form className='p-2 mx-2 border shadow bg-light'>
      <img  width={400} src="https://static.vecteezy.com/system/resources/previews/027/309/403/original/office-employee-with-ai-generated-free-png.png" alt="" />
      
       <h3 className='container text-center mt-5'> Enter  your Details</h3>
    <br />
    <MDBInput  onChange={(e)=>setId(e.target.value)} value={conid}  label='id' id='form1' type='text' /> <br />
    <MDBInput  onChange={(e)=>setName(e.target.value)} value={conname}  label='name' id='form1' type='text' /> <br />
    <MDBInput  onChange={(e)=>setAge(e.target.value)} value={conage}  label='Age' id='form1' type='text' /> <br />
    <MDBInput  onChange={(e)=>setphone(e.target.value)} value={conphone}  label='phone' id='form1' type='text' />  <br />
    <MDBInput  onChange={(e)=>setemail(e.target.value)}  value={conemail} label='email' id='form1' type='text' /> <br /> <br />
    
    
    <div>
      <button onClick={(e)=>updatecontact(e)} className='btn btn-parimary' >update</button>
    </div>
    </form>
  </div>

  </div>
      
    </div>
  )
}

export default Edit