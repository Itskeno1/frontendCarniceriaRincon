import "../src/App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import IniciarSesion from "./pages/Background";
import Registrarse from "./pages/Registrarse";
import Inicio from "./pages/Inicio";
import Inicio2 from "./pages/Inicio2";
import Mapa from "./pages/Mapa";
import Registros from "./pages/RegistrosEmpleado";
import Registros2 from "./pages/RegistrosInventario";
import Registros3 from "./pages/RegistrosPedido";
import Registros4 from "./pages/RegistrosProducto";
import Registros5 from "./pages/RegistrosProveedor";
import Registros6 from "./pages/RegistrosVenta";
import RegistrosModic from "./pages/RegistrosModicEmple";
import RegistrosModic2 from "./pages/RegistrosModicProveedor";
import RegistrosModic3 from "./pages/RegistrosModicPedido";
import RegistrosModic4 from "./pages/RegistrosModicProducto";
import RegistrosModic5 from "./pages/RegistrosModic5";
import RegistrosModic6 from "./pages/RegistrosModicPedidos";
import Tablas from "./pages/Tablas";
import Tablas2 from "./pages/tablas2";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IniciarSesion />,
    },
    {
      path: "/Registrarse",
      element: <Registrarse />,
    },
    {
      path: "/Iniciarsesion",
      element: <IniciarSesion />,
    },

    {
      path: "/Inicio",
      element: <Inicio />,
    },
    {
      path: "/Mapa",
      element: <Mapa />,
    },
    {
      path: "/",
      element: <Inicio />,
    },
    {
      path: "/inicio2",
      element: <Inicio2 />,
    },
    {
      path: "/Registros",
      element: <Registros />,
    },
    {
      path: "/Registros2",
      element: <Registros2 />,
    },
    {
      path: "/Registros3",
      element: <Registros3 />,
    },
    {
      path: "/Registros4",
      element: <Registros4 />,
    },
    {
      path: "/Registros5",
      element: <Registros5 />,
    },
    {
      path: "/Registros6",
      element: <Registros6 />,
    },
    {
      path: "/RegistrosModic",
      element: <RegistrosModic />,
    },
    {
      path: "/RegistrosModic2",
      element: <RegistrosModic2 />,
    },
    {
      path: "/RegistrosModic3",
      element: <RegistrosModic3 />,
    },
    {
      path: "/RegistrosModic4",
      element: <RegistrosModic4 />,
    },
    {
      path: "/RegistrosModic5",
      element: <RegistrosModic5 />,
    },
    {
      path: "/RegistrosModic6",
      element: <RegistrosModic6 />,
    },
    {
      path: "/Tablas",
      element: <Tablas />,
    },
    {
      path: "/Tablas2",
      element: <Tablas2 />,
    },
    {
      path: "/Inicio",
      element: <Inicio />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
