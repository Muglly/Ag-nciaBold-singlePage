import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Marcas from "./Marcas";
import PqNos from './PqNos';
import Cta from "./Cta"
import Beneficios from './Beneficios';
import Depoimentos from './Depoimentos';
import Contato from "./Contato";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Marcas/>
    <PqNos/>
    <Cta/>
    <Beneficios/>
    <Depoimentos/>
    <Contato/>
  </React.StrictMode>
);


