import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componenets/Header/Header';
import { createRoot } from 'react-dom/client';
import Calls from "./componenets/Calls";
import ArchivedCall from "./componenets/ArchivedCall";
import Footer from "./componenets/Footer";

const App = () => {
    return (
        <Router>
            <div className='container'>
                <Header/>
                <Routes>
                    <Route path="/" element={<Calls/>} />
                    <Route path="/archived-call" element={<ArchivedCall/>} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);