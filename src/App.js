import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/global.css';
import Navbar from './components/Navbar';
import OffcanvasUp from './components/OffcanvasUp';
//import contextInfoUser from './context/userContext';
import InfoUser from './context/userContext';
import injectContext from './store/appContext';
import About from './views/about';
import Home from './views/home';
import BackgroundApp from './components/BackgroundApp';

const App = () => {
    return (
        <>
            <InfoUser>
                <BrowserRouter>
                    <BackgroundApp>
                        <Navbar />
                        <Routes>
                            <Route path="/about" element={<About />} />
                            <Route path="/" element={<Home />} />
                        </Routes>
                        <OffcanvasUp />
                    </BackgroundApp>
                </BrowserRouter>
            </InfoUser>
        </>
    )
}

export default injectContext(App);
//export default contextInfoUser(App);