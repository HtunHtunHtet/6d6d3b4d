import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componenets/Header/Header';
import { createRoot } from 'react-dom/client';
import AllCall from "./componenets/AllCall";
import ArchivedCall from "./componenets/ArchivedCall";

const App = () => {
    return (
        <Router>
            <div className='container'>
                <Header/>
                <Routes>
                    <Route path="/" element={<AllCall/>} />
                    <Route path="/archived-call" element={<ArchivedCall/>} />
                </Routes>
            </div>
        </Router>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);