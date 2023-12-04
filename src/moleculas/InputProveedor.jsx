import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import '../sources/estilos.css';
import Swal from 'sweetalert2';
import Axios from "axios";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { Typography } from '@mui/material';
import 'react-datepicker/dist/react-datepicker.css';

function ProductRegistration() {
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [productWeight, setProductWeight] = useState('');
 

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Validate if all required fields are filled
    if (!productName || !productType || !productWeight ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all the fields!',
        footer: '<a id="secondAlertLink" href="#">Why do I have these issues?</a>'
      }).then((result) => {
        if (result.isConfirmed) {
          // Handle confirmation action if needed
        }
      });
    } else {
      // If all fields are filled, proceed with product registration
      Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to change the product details!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, confirm!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Saved!',
            'Product details have been registered.',
            'success'
          );

          // Perform the actual product registration using Axios or your preferred method
          registerProduct();
          
          // Clear the input fields after successful registration
          setProductName('');
          setProductType('');
          setProductWeight('');
          
        }
      });
    }
  };

  const registerProduct = () => {
    // Replace the following Axios post request with your actual backend endpoint and payload
    Axios.post("http://54.236.200.66/Provedor", {
      ID: productName,
      Nombre_Empresa: productType,
      Telefono: productWeight,
     
    })
    .then(() => {
      // Handle success if needed
    })
    .catch((error) => {
      console.error(error);
      // Handle error if needed
    });
  };

  return (
    <div className='container-product'>
              <Typography variant='h4' sx={{textAlign:'center',mt:'1em'}}>
        Ingrese los datos del Provedor
        </Typography>
      <div className="form-panel">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="productName">ID:</label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(event) => { setProductName(event.target.value); }}
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="productType">Nombre de la empresa:</label>
            <input
              type="text"
              id="productType"
              value={productType}
              onChange={(event) => { setProductType(event.target.value); }}
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="productWeight">Telefono:</label>
            <input
              type="text"
              id="productWeight"
              value={productWeight}
              onChange={(event) => { setProductWeight(event.target.value); }}
              className="form-control"
            />
          </div>
          <br />
          <button className="btn btn-primary">Registrar Provedor</button>
        </form>
      </div>
    </div>
  );
}

export default ProductRegistration;
