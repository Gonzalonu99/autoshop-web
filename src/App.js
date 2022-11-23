import { Fragment } from "react";
import Descargar from "./components/descargar";
import Footer from "./components/footer";
import Form from "./components/formulario";
import Home from "./components/home";
import Integrar from "./components/integrar";
import NavBar from "./components/navbar";
import ScrollUp from "./components/scroll";
import Sucursales from "./components/sucursales";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Home />
      <Integrar />
      <Descargar />
      <Sucursales />
      <Form />
      <Footer/>
      <ScrollUp />
    </Fragment>
  );
}

export default App;
