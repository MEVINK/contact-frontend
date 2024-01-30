import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import './Header.css'


function Header() {
  return (
    <div>
         <MDBNavbar className='navbar'>
        <MDBContainer fluid className=''>
          <MDBNavbarBrand href='#' className='text-center'>
            <img className='text-center'
              src='https://i.pinimg.com/564x/b0/10/64/b01064465d278ea8f2f0fc2b60ea9d6b.jpg '
              height='30'
              alt=''
              loading='lazy'
            />
            TeleCompany
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
        
    </div>
  )
}

export default Header