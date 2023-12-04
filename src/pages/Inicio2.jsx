import "../pages/inicio.css";
import Cabezera2 from "../moleculas/cabeza2";
import TituloPage from "../atomos/TituloPage";
import Cuadros from "../moleculas/Cuadros";
import TituloAny from "../atomos/TituloAny";
import Footer from "../moleculas/Footer";
import Navbar5 from "../moleculas/NavbarInicio";
import ScrollToTopButton from "../organismo/Scrollbutton";
import Mapa from "./Mapa";
const titulo = "¿Porque elegir Carniceria Rincon?";
const tituloAny = "¿Como llegar?";
function Inicio() {
  return (
    <>
      <Navbar5 />
      <Cabezera2 />
      <TituloPage titulo={titulo} />
      <Cuadros />
      <TituloAny tituloAny={tituloAny} />
      <Mapa />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
export default Inicio;
