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
  const [productName, setProductName] = useState('');  //esta es la variable el productTypeName es la variable y set es la funcion que se actualiza
  const [productType, setProductType] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [empleadoApellido, setApellido] = useState('');




  //aqui se hace la validacion que no quede nada vacio
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Validate if all required fields are filled
    if (!productName || !productType || !productWeight || !empleadoApellido ) {
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



          //aqui verifico que los valores se esten enviando bienn

          console.log("estoy aqui")
          console.log(productName)
          console.log(productType)
          console.log(productWeight)
          console.log(empleadoApellido)


         
          // Perform the actual product registration using Axios or your preferred method
         //aqui se manda a llamar axios  para hacerle Post a la Api
          registerProduct();
          
          // Clear the input fields after successful registration

          //aqui limpia los inputs
          setProductName('');
          setProductType('');
          setProductWeight('');
          setApellido('');
        }
      });
    }
  };


  //esta es la funcion del axios
  const registerProduct = () => {
    // Replace the following Axios post request with your actual backend endpoint and payload
  
  //el primer parametro es la ruta 
  //el segundo es la informacion tal cual lo indica el thunder
    Axios.post("http://54.236.200.66/empleado", {
      ID_empleado: productName,
      Nombre: productType,
      Apellidos: empleadoApellido,
      Numero: productWeight,
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
        ingrese los datos del empleado
        </Typography>
      <div className="form-panel">
       
        <form onSubmit={handleFormSubmit} className='form'>
          <div className="form-group">
            <label htmlFor="productName">ID del empleado</label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(event) => { setProductName(event.target.value); }}  // input le envia el valor a la variable
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="productType">Nombre del empleado</label>
            <input
              type="text"
              id="productType"
              value={productType}
              onChange={(event) => { setProductType(event.target.value); }}
              className="form-control"
            />
          </div>
          <br />
          <br />
          <div className="form-group">
            <label htmlFor="productType">Apellido del empleado</label>
            <input
              type="text"
              id="productType"
              value={empleadoApellido}
              onChange={(event) => { setApellido(event.target.value); }}
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="productWeight">Numero</label>
            <input
              type="text"
              id="productWeight"
              value={productWeight}
              onChange={(event) => { setProductWeight(event.target.value); }}
              className="form-control"
            />
          </div>
          <br />
          <button className="btn btn-primary">Registrar empleado</button>
        </form>
      </div>
    </div>
  );
}

export default ProductRegistration;
