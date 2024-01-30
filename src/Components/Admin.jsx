import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'

function Admin() {
 
  const base_url='http://localhost:8000'

  const [allcontacts,setAllContacts]=useState([])

  const fetchData=async()=>{
    const result  = await axios.get(`${base_url}/get-all-contacts`)
    console.log(result.data.agents);
    setAllContacts(result.data.agents)
  }
  console.log(allcontacts); //array

  const Deletecontact=async(id)=>{
    const result=await axios.delete(`${base_url}/delete-contact/${id}`)
    alert(result.data.message)
    fetchData()

  }

  useEffect(()=>{
fetchData()
  },[])
  return (
    <div>   

      <h2 className='text-center m-3'>Add Your Contacts</h2>
      <div className='container'>
       <p>
     
To add all the contacts associated with your email account, select Settings
 Add an account and follow the instructions. To add a contact, select Add , 
 and choose the account you'd like to save new contacts to. Then add the contact's name and whatever other info you want to store. 
 When you're done, select Save .
  
  <div className="container">
    <img src="https://cdni.iconscout.com/illustration/premium/thumb/contact-is-empty-4064357-3363918.png" alt="" />
  </div>

 <Link to={'/add'}><a href=""><button className='btn btn-primary border rounded m-2' style={{float:'right'}}>Add contact</button></a>
 </Link>
       </p>
       <div className="container">
       <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
        <th scope='col'>ID</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Phone</th>
          <th scope='col'>Email</th>
          <th scope='col'>Actions</th>
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>
       {
        allcontacts.map((item)=>(
          <tr>
          <td>
          {item.id}
          </td>
          <td>
          {item.name}

          </td>
          <td>
          {item.age}

          </td>
          <td>
          {item.phone}

          </td>
          <td>
          {item.email}

          </td>
          <td>
            <div className='d-flex justify-content-evenly'>
           <Link to={`/view/${item.id}`}>  <i className='fa-solid fa-eye'style={{color:'#74C0FC'}}></i>
           </Link>
           <Link to={`/edit/${item.id}`}>   <i className='fa-solid fa-pen 'style={{color:'#74C0FC'}}></i>
           </Link>
              <i className='fa-solid fa-view 'style={{color:'#74C0FC'}}></i>
              <i onClick={()=>Deletecontact(item.id)} className='fa-solid fa-trash 'style={{color:'red'}}></i>
            </div>
            
          </td>
        </tr>
       
        )

        )
       }
      </MDBTableBody>
    </MDBTable>

       </div>

       </div>

       <div className='d-flex text-center' style={{}}>
      <i class="fa-solid fa-address-book fa-beat-fade fa-xl p-4" style={{color:' #74C0FC',marginTop:'2%',marginLeft:'40%'}}></i>
      <i class="fa-solid fa-phone fa-beat fa-xl p-4" style={{color:' #74C0FC',marginTop:'2%',}}></i>
      <i class="fa-regular fa-message fa-beat-fade fa-xl p-4"style={{color:' #74C0FC',marginTop:'2%'}} ></i>
      <i class="fa-brands fa-whatsapp fa-beat-fade fa-xl p-4" style={{color:' #74C0FC',marginTop:'2%'}}></i>
      </div>








        
    </div>
  )
}

export default Admin