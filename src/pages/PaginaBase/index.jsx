import React from 'react'

import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router-dom';

export default function index() {
  return (
    <main>
        <NavBar />
        {/* aqui podria ir context use  */}
        <Container>
            <Outlet />
        </Container>
        <Footer />
    </main>
  )
}
