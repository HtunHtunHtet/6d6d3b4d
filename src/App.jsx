import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import {createRoot} from 'react-dom/client';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">Some actvities should be here</div>
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);
