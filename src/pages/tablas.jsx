import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { MdDelete } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import Navbar4 from '../moleculas/NavbarEmpleados';
import carne from '../assets/carne.jpg';

const ModalEditarProducto = ({ producto, onGuardar, onClose }) => {
  const [valores, setValores] = useState({});

  useEffect(() => {
    // Inicializar los valores del formulario con los del producto seleccionado
    setValores(producto);
  }, [producto]);

  const handleInputChange = (e, propiedad) => {
    // Actualizar el estado con los nuevos valores del formulario
    setValores({ ...valores, [propiedad]: e.target.value });
  };

  const generarInputs = () => {
    // Obtener las propiedades del producto
    const propiedades = Object.keys(producto);

    return propiedades.map((propiedad, index) => (
      <div key={index}>
        <label>{propiedad}:</label>
        <input
          type="text"
          value={valores[propiedad] || ''}
          onChange={(e) => handleInputChange(e, propiedad)}
        />
      </div>
    ));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => { onGuardar(valores); onClose(); }}>
          &times;
        </span>
        <h2>Editar Producto</h2>
        <form>{generarInputs()}
          <button
            type="button"
            onClick={() => {
              onGuardar(valores);
              onClose();
            }}
          >
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
};

function Tabla() {
  const [tablaSeleccionada, setTablaSeleccionada] = useState(0);
  const [tablas, setTablas] = useState([]);
  const [nombresTablas, setNombresTablas] = useState([]);
  const [ValorSeleccionado, setValorSeleccionado] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState({});
  const tablasURLs = ["http://54.236.200.66/Pedidos", "http://54.236.200.66/Inventario", "http://54.236.200.66/Productos", "http://54.236.200.66/Provedor", "http://54.236.200.66/Ventas"];
  const cambiarTabla = (indice) => {
    setTablaSeleccionada(indice);
    setValorSeleccionado(nombresTablas[indice]);
  };

  const handleEliminarClick2 = (id) => {
    Axios.delete(`http://54.236.200.66/Inventario/eliminar/${id.ID_Inventario}`)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
      
  };

  const handleEliminarClick3 = (id) => {
    Axios.delete(`http://54.236.200.66/Pedidos/eliminar/${id.ID_Pedidos}`)
      .then(() => {     window.location.reload();})
      .catch((error) => {
        console.error(error);
      });
      
  };

  const handleEliminarClick4 = (id) => {
    Axios.delete(`http://54.236.200.66/Producto/eliminar/${id.ID_Producto}`)
      .then(() => {     window.location.reload();})
      .catch((error) => {
        console.error(error);
      });
 
  };

  const handleEliminarClick5 = (id) => {
    Axios.delete(`http://54.236.200.66/Provedor/eliminar/${id.ID}`)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
      
  };

  const handleEliminarClick6 = (id) => {
    Axios.delete(`http://54.236.200.66/Ventas/eliminar/${id.ID_Venta}`)
      .then(() => {     window.location.reload();})
      .catch((error) => {
        console.error(error);
      });
      
  };

  const obtenerEncabezados = () => {
    if (tablas.length > 0 && tablas[tablaSeleccionada]) {
      const primeraFila = tablas[tablaSeleccionada][0];
      return primeraFila
        ? [...Object.keys(primeraFila), 'Acciones'] // Agrega la columna "acciones"
        : [];
    }
    return [];
  };

  const handleEliminar = (producto) => {
    switch (ValorSeleccionado) {
      case 'Inventario':
        handleEliminarClick2(producto);
        break;
      case 'Pedido':
        handleEliminarClick3(producto);
        break;
      case 'Productos':
        handleEliminarClick4(producto);
        break;
      case 'Provedor':
        handleEliminarClick5(producto);
        break;
      case 'Ventas':
        handleEliminarClick6(producto);
        break;
      default:
        console.error('Tabla no reconocida');
    }
  };

  

  useEffect(() => {
    // Realizar todas las solicitudes Axios al mismo tiempo
    const solicitudesAxios = tablasURLs.map((url) => Axios.get(url));

    Promise.all(solicitudesAxios)
      .then((responses) => {
        // Mapear las respuestas y actualizar el estado
        const nuevasTablas = responses.map((response) => response.data);
        setTablas(nuevasTablas);

        // Obtener los nombres de las tablas desde las respuestas
        const nuevosNombres = responses.map((response) => {
          // Extraer el nombre de la tabla del último segmento de la URL
          const segments = response.config.url.split('/');
          return segments[segments.length - 1];
        });
        setNombresTablas(nuevosNombres);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  return (
    <>
      <Navbar4 />
      <div
        className="h-screen flex flex-col items-center justify-center bg-cover"
        style={{
          backgroundImage: "url('../src/assets/carne.jpg')",
        }}
      >
        <div className="bg-white p-6 rounded-lg shadow-md w-auto lg:w-2/3 xl:w-1/2 mb-4">
          <h2 className="text-3xl font-semibold mb-6 text-center text-black">
            Tabla de consulta
          </h2>
          <label htmlFor="tablaSelector" className="sr-only">
            Selecciona una tabla:
          </label>
          <select
            id="tablaSelector"
            className="block w-full p-2 border rounded-md bg-gray-100  focus:outline-none focus:ring focus:border-blue-300 mb-4"
            value={tablaSeleccionada}
            onChange={(e) => cambiarTabla(Number(e.target.value))}
          >
            {nombresTablas.map((nombre, index) => (
              <option key={index} value={index}>
                {nombre}
              </option>
            ))}
          </select>
          <table className="min-w-full bg-white border border-gray-300 rounded shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <thead className="bg-slate-900 text-white">
              <tr>
                {obtenerEncabezados().map((encabezado, index) => (
                  <th key={index} className="py-3 px-4 text-left border border-gray-300">
                    {encabezado}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tablas.length > 0 &&
                tablas[tablaSeleccionada].map((producto, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-100 transition-bg' : 'bg-white transition-bg'}
                  >
                    {obtenerEncabezados().map((encabezado, index) => (
                      <td key={index} className="py-3 px-4 border border-gray-300 transition-bg">
                        {encabezado === 'Acciones' ? (
                          <div className="flex items-center space-x-2">
                            <MdDelete
                              size={30}
                              className="text-red-500 cursor-pointer"
                              onClick={() => handleEliminar(producto)}
                            />
                 
                          </div>
                        ) : (
                          producto[encabezado]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Modal de Edición */}
        {Object.keys(productoSeleccionado).length > 0 && (
          <ModalEditarProducto
            producto={productoSeleccionado}
            onGuardar={(nuevosValores) => {
              // Lógica para guardar los cambios (puedes hacer la solicitud Axios aquí)
              console.log('Guardar cambios:', nuevosValores);
            }}
            onClose={() => setProductoSeleccionado({})}
          />
        )}
      </div>
    </>
  );
}

export default Tabla;
