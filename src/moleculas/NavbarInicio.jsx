import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function App() {
  const [showNavColor, setShowNavColor] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' dark style={{ backgroundColor:'#b90504' }}>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className='mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/Inicio">
                  <MDBNavbarLink href='#'style={{color:'azure'}}>Productos</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/Inicio2">
                  <MDBNavbarLink href='#'style={{color:'azure'}}>Empleados</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              </MDBNavbarItem>
              <MDBNavbarItem>
              </MDBNavbarItem>
              <MDBNavbarItem>
              </MDBNavbarItem>
              <MDBNavbarItem>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
          <MDBNavbarItem style={{color:'azure'}}>
              </MDBNavbarItem>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
