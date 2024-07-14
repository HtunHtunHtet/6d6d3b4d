import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './componenets/Header';
import { createRoot } from 'react-dom/client';
import AllCall from "./componenets/AllCall";

const App = () => {
    return (
        <Router>
            <div className='container'>
                <Header/>
                <Routes>
                    <Route path="/" element={<AllCall/>} />
                </Routes>
            </div>
        </Router>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);