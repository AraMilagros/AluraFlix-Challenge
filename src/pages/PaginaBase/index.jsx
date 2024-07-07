import Nav from "../../components/Navbar"
import Contenedor from "../../components/Contenedor"
import Footer from '../../components/Footer';

import { Outlet } from "react-router-dom"

export default function index() {
  return (
    <main>
        <Nav />
        <Contenedor>
          <Outlet/>
        </Contenedor>
        <Footer />
    </main>
  )
}
