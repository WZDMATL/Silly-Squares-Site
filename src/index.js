import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Exclusive from "./Components/Exclusive";
import ExclusiveContent from './Components/ExclusiveContent';
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const rootElement = document.getElementById("root");
render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="header" element={<Header />} />
      <Route path="footer" element={<Footer />} />
      <Route path="exclusivecontent" element={<ExclusiveContent />} />
      <Route path="exclusive" element={<Exclusive />} />
    </Routes>
  </HashRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
