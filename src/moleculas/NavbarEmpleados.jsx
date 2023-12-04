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
          <MDBNavbarBrand href='/inicio'>Carniceria Rincon</MDBNavbarBrand>
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
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <Link to="/inicio">
                  <MDBNavbarLink aria-current='page' href='#' style={{color:'azure'}}>
                    Regresar
                  </MDBNavbarLink>
                </Link>
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
