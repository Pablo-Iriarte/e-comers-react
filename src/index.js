import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import ReactDOM from 'react-dom/client';
import { Main } from './components/Main/main.jsx';
import NavBar from "./components/NavBar/NavBar.jsx";

import { Contact } from './components/Contact/Contact.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <NavBar />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/catalogo' element={<ItemListContainer />} />

        
        


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);