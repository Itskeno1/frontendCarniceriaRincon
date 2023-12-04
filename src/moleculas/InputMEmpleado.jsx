import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "../sources/estilos.css";
import Swal from "sweetalert2";
import Axios from "axios";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { Typography } from "@mui/material";
import Buscador from "./Buscador/Buscador";
import "react-datepicker/dist/react-datepicker.css";

function ProductRegistration() {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productWeight, setProductWeight] = useState("");
  const [empleadoApellido, setApellido] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!productName || !productWeight ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Porfavor llene todos los campos",
        footer:
          '<a id="secondAlertLink" href="#">Why do I have these issues?</a>',
      }).then((result) => {

        if (result.isConfirmed) {
          setProductWeight(null)//acabo de agregar esto 
        }

      });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to change the product details!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, confirm!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Saved!",
            "Product details have been registered.",
            "success"
          );

          registerProduct();

          setProductName("");
          setProductType("");
          setProductWeight("");
          setApellido("");
        }
      });
    }
  };

  const registerProduct = () => {
    console.log("Estoy aqui 12");
    console.log(productWeight);

    if(productWeight==""){
      setProductWeight(null)
      
    }

    // Replace the following Axios post request with your actual backend endpoint and payload
    Axios.put(`http://localhost:3003/Empleado/${productName}`, {
      
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
    <div className="container-product">
     
      <Typography variant="h4" sx={{ textAlign: "center", mt: "1em" }}>
        Ingrese los datos del empleado 
      </Typography>
      <div className="form-panel">
        <form onSubmit={handleFormSubmit} className="form">
          <div className="form-group">
            <label htmlFor="productName">ID del empleado:</label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(event) => {
                setProductName(event.target.value);
              }}
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="productType">Nombre del empleado:</label>
            <input
              type="text"
              id="productType"
              value={productType}
              onChange={(event) => {
                setProductType(event.target.value);
              }}
              className="form-control"
            />
          </div>
          <br />
          <br />
          <div className="form-group">
            <label htmlFor="productType">Apellido del empleado:</label>
            <input
              type="text"
              id="productType"
              value={empleadoApellido}
              onChange={(event) => {
                setApellido(event.target.value);
              }}
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="productWeight">Numero:</label>
            <input
              type="text"
              id="productWeight"
              value={productWeight}
              onChange={(event) => {
                setProductWeight(event.target.value);
              }}
              className="form-control"
            />
          </div>
          <br />
          <button className="btn btn-primary">
            Modificar 
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductRegistration;
