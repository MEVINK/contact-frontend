import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function View() {

  const base_url='http://localhost:8000'

  const [contactData,setContactData]=useState({})

  const {id}=useParams()
  console.log(id);

  //get a perticular contact

  const getContact=async(id)=>{
    const result =await axios.get(`${base_url}/get-a-contact/${id}`)
    console.log(result.data.agents);
    setContactData(result.data.agents)

  }

  console.log(contactData);

  useEffect(()=>{
 getContact(id)
  },[])

  




  return (
    <div>
      <h2 className='text-center'>Contacts</h2>
      <h3 className='text-center m-4 text-primary'>View Contact Details</h3>
              
       




      <div className='container m-5  p-5 d-flex justify-content-between'>

        <MDBCard style={{ width: '500px' }}>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>

            <a>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Contact Details</MDBCardTitle>
           {
             <MDBCardText className='text'>
             <MDBListGroup style={{ minWidth: '22rem' }} light>
       <MDBListGroupItem active noBorders aria-current='true' className='px-3'>
         ID :  {contactData.id}
       </MDBListGroupItem>
       <MDBListGroupItem noBorders className='px-3'>
        FULL NAME:{contactData.name}
       </MDBListGroupItem>
       <MDBListGroupItem noBorders className='px-3'>
         AGE:{contactData.age}
       </MDBListGroupItem>
       <MDBListGroupItem noBorders className='px-3'>
         PHONE: {contactData.phone}
       </MDBListGroupItem>
       <MDBListGroupItem noBorders className='px-3'>
          EMAIL :{contactData.email}
       </MDBListGroupItem>
     </MDBListGroup>
 
            
 
 
 
 
             </MDBCardText>
           }

          </MDBCardBody>
        </MDBCard>
        <div className="image card" style={{ width: '400px' }}>

          <img style={{ width: '300px' }} src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-5795988-4849052.png" alt="" />

        </div>

      </div>
      <div className='container d-flex'>
        

         <p style={{marginLeft:'8%',marginTop:'10%'}}>
          
"You can allow some apps to use various features on your device, such as your camera or contacts list.
 An app will send a notification to ask for permission to use features on your device, which you can Allow or Deny. You can also change permissions for a single app or by permission type in your device's settings."

         </p>
        
         </div>




      <div className='text-center m-2 p-2' > <MDBBtn href='/admin'>Back to Admin</MDBBtn></div>

      <div className='d-flex text-center' style={{}}>
      <i className="fa-solid fa-address-book fa-beat-fade fa-xl p-4" style={{color:' #74C0FC',marginTop:'2%',marginLeft:'40%'}}></i>
      <i className="fa-solid fa-phone fa-beat fa-xl p-4" style={{color:' #74C0FC',marginTop:'2%',}}></i>
      <i className="fa-regular fa-message fa-beat-fade fa-xl p-4"style={{color:' #74C0FC',marginTop:'2%'}} ></i>
      <i className="fa-brands fa-whatsapp fa-beat-fade fa-xl p-4" style={{color:' #74C0FC',marginTop:'2%'}}></i>
      </div>

    </div>
  )
}

export default View