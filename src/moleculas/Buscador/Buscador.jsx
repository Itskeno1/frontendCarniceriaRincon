import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Buscador.module.css";

function Buscador(seccion) {
  console.log(seccion)
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [items, setitems] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);


  useEffect(() => {
    const fetchitems = async () => {
      try {
       
        const response = await fetch(`http://54.236.200.66/Pedidos/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();
        if (result && Array.isArray(result.data)) {
          setitems(result.data);
          console.log(result.data);
        } else {
          console.error('Invalid data format:', result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchitems();
  }, []); 
  const filteredOptions = useMemo(() => {
    return items
      .filter((item) => (
        item.Producto && item.Producto.toString().toLowerCase().includes(inputValue.toLowerCase())
      ))
      .slice(0, 10);
  }, [items, inputValue]);
  

  const handleChange = ({ target }) => {
    setInputValue(target.value);
    setSelectedOption(null);
  };

  return (
    <div className={style.group}>
      <input
        placeholder="Search"
        type="search"
        className={style.input}
        onChange={handleChange}
        list="x"
      />
      <svg className={style.icon} aria-hidden="true" viewBox="0 0 24 24">
        <g>
          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
      </svg>
      {filteredOptions.map((item, index) => (
  <div
    key={index}
    className={style.option}
    // onClick={() => handleOptionClick(item)}
    style={{ background: selectedOption === item ? "#ccc" : "transparent" }}
  >
    <span>{item.ID_Pedidos}</span>
    <span>Producto: {item.Producto}</span>
  </div>
))}

    </div>
  );
}

export default Buscador;
