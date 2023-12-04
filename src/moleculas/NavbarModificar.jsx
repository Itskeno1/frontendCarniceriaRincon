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
                  <MDBNavbarLink aria-current='page' href='/inicio'style={{color:'azure'}}>
                    Regresar
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/RegistrosModic2">
                  <MDBNavbarLink href='#'style={{color:'azure'}}>Inventario</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/RegistrosModic3">
                  <MDBNavbarLink href='#'style={{color:'azure'}}>Pedidos</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/RegistrosModic4">
                  <MDBNavbarLink href='#'style={{color:'azure'}}>Productos</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/RegistrosModic5">
                  <MDBNavbarLink href='#'style={{color:'azure'}}>Provedor</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/RegistrosModic6">
                  <MDBNavbarLink href='#' style={{color:'azure'}}>Venta</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
          <MDBNavbarItem style={{color:'azure'}}>
                <span>
                  ¿Qué desea Modificar?
                </span>
              </MDBNavbarItem>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
