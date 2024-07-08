import Nav from "../../components/Navbar"
import Contenedor from "../../components/Contenedor"
import VideosProvider from "../../context/VideosContexto";
import Footer from '../../components/Footer';

import { Outlet } from "react-router-dom"

export default function index() {
  return (
    <main>
      <Nav />
      <VideosProvider>
        <Contenedor>
          <Outlet />
        </Contenedor>
      </VideosProvider>
      <Footer />
    </main>
  )
}
