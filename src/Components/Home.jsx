import React from 'react'
import { Link } from 'react-router-dom'
import Admin from './Admin'

function Home() {
  return (
    <div>
         <h2 className='text-center'>TELE APP</h2>
        <div className='container d-flex m-5 p-5 mt-2 justify-content-between'>
      
    <p className='' style={{marginTop:'10%'}} >

   
    "You can use the Contacts app to find someone's contact info or organize contacts with labels like "friends" or "family." Important: You're using an older Tele Software version.
     Some of these steps work only on Tele Softwrae and up.
     Learn how to check your Tele Software version."

     

    </p>

    <img  className='border rounded' src="https://i.pinimg.com/originals/84/44/d8/8444d8b121f34fcf346ab8676a1fdacf.gif" style={{width:'500px',height:'450px',marginLeft:'20%',}}  alt="" />
    

  </div>
      
        <img src="https://img.freepik.com/free-vector/contact-center-abstract-concept_335657-3032.jpg" alt="" />


  <h2 className='text-center mt-2'>Connect</h2>
  <div className='container d-flex m-5 p-5 mt-2 justify-content-between'>

<img className='border rounded' src="https://i.pinimg.com/originals/de/d0/bb/ded0bbdd8485e424327257405a86a884.gif" style={{width:'500px',height:'500px'}} alt="" />

<p className='mt-5' style={{marginLeft:'20%',marginTop:'5%'}}>
"Every time there's a new tool, whether it's Internet or cell phones or anything else, all these things can be used for good or evil.

Eventually everything connects - people, ideas, objects. The quality of the connections is the key to quality per se. Loneliness is different than isolation and solitude.
Loneliness is a subjective feeling where the connections we need are greater than the connections we have."
</p>






</div>
   
   <Link to={'/admin'}><a href=""><button className='btn btn-primary border rounded m-2 text-center' style={{}}>Get Started</button></a>
   </Link>

<div className='d-flex text-center' style={{}}>
      <i class="fa-solid fa-address-book fa-beat-fade fa-xl p-4" style={{color:' #74C0FC',marginTop:'2%',marginLeft:'40%'}}></i>
      <i class="fa-solid fa-phone fa-beat fa-xl p-4" style={{color:' #74C0FC',marginTop:'2%',}}></i>
      <i class="fa-regular fa-message fa-beat-fade fa-xl p-4"style={{color:' #74C0FC',marginTop:'2%'}} ></i>
      <i class="fa-brands fa-whatsapp fa-beat-fade fa-xl p-4" style={{color:' #74C0FC',marginTop:'2%'}}></i>
      </div>
  </div>
  )
}

export default Home