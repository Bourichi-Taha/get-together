import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./assets/css/bootstrap.css"
// import "./assets/css/font-awesome.min.css"
import "./assets/css/responsive.css"
import "./assets/css/style.css"
import "./assets/css/style.css.map"
import "./assets/css/style.scss"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<App />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

