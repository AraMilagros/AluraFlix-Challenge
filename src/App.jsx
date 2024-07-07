import React from 'react'
import './index.css';

import Nav from './components/Navbar';
import Header from './components/Header';
import Principal from './pages/Principal';

import Video from './pages/Video';

export default function App() {
    return (
        <> 
            <Nav />
            <Header />
            <Principal /> 
            {/* <Video /> */}
        </>
    )
}
