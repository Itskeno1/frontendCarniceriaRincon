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
  const [productPrice, setProductPrice] = useState('');
  const [inventaPas, setInventaPas] = useState('');

  const handleFormSubmit = (e) => {

    console.log(productName)
    console.log(productType)
    console.log(productWeight)
    console.log(productPrice)
    console.log(inventaPas)


    
    e.preventDefault();
    
    // Validate if all required fields are filled
    if (!productName || !productType || !productWeight || !productPrice   || !inventaPas ) {
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

          registerProduct();
          
          setProductName('');
          setProductType('');
          setProductWeight('');
          setProductPrice('');
          setInventaPas('')
        }
      });
    }
  };

  const registerProduct = () => {
    // Replace the following Axios post request with your actual backend endpoint and payload
    Axios.post("http://54.236.200.66/Pedidos", {
      ID_Pedidos: productName,
      Fecha: String(productType), // Convertir a cadena
      Precio: parseInt(productWeight), // Convertir a entero
      ID_Producto: parseInt(productPrice), // Convertir a entero
      Cantidad: parseInt(inventaPas), // Convertir a entero
    })
    .then(() => {
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className='container-product'>
              <Typography variant='h4' sx={{textAlign:'center',mt:'1em'}}>
        Ingrese los datos del pedido 
        </Typography>
      <div className="form-panel">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="productName">ID de Pedidos</label>
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
            <label htmlFor="productType">Fecha:</label>
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
            <label htmlFor="productWeight">Precio:</label>
            <input
              type="text"
              id="productWeight"
              value={productWeight}
              onChange={(event) => { setProductWeight(event.target.value); }}
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="productPrice">ID del producto:</label>
            <input
              type="text"
              id="productPrice"
              value={productPrice}
              onChange={(event) => { setProductPrice(event.target.value); }}
              className="form-control"
            />
          </div>
          <br />
          <br />
          <div className="form-group">
            <label htmlFor="productPrice">Cantidad:</label>
            <input
              type="text"
              id="inventaPas"
              value={inventaPas}
              onChange={(event) => { setInventaPas(event.target.value); }}
              className="form-control"
            />
          </div>
          <br />
          <button className="btn btn-primary">Registrar el pedido</button>
        </form>
      </div>
    </div>
  );
}

export default ProductRegistration;
