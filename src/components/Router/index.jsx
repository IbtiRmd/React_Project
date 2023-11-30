import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../../utils/style/index.module.scss'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Error from '../../pages/Error/Error';
import FlatsSheets from '../../pages/FlatsSheets/FlatsSheets';
import flatsList from '../../datas/flatsList.json';

export default function MyRouter() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                {flatsList.map((flat) => (
                <Route 
                key={flat.id} 
                path={`/flat/${flat.id}`} 
                element={<FlatsSheets />} 
                />
                ))}
                <Route path='/*' element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    )
}