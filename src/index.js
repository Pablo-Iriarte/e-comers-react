import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import ReactDOM from 'react-dom/client';
import { Main } from './components/Main/main.jsx';
import NavBar from "./components/NavBar/NavBar.jsx";

import { Contact } from './components/Contact/Contact.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnJeBhTCHHN6hh_J14LTEjmGzqiIZyCY8",
  authDomain: "e-comers-coder.firebaseapp.com",
  projectId: "e-comers-coder",
  storageBucket: "e-comers-coder.appspot.com",
  messagingSenderId: "701822580350",
  appId: "1:701822580350:web:93da37a92c75a9ae60ca2f"
};

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <NavBar />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/catalogo' element={<ItemListContainer />} />
        <Route exact path='/detail' element={<ItemDetailContainer />} />


        
        


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);