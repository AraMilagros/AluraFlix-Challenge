import React from 'react'
import './index.css';

import Nav from './components/Navbar';
import Header from './components/Header';
import Principal from './pages/Principal';

export default function App() {
    return (
        <> 
            <Nav />
            <Header />
            <Principal />
        </>
    )
}
