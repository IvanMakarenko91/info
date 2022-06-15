import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Canicule from "./routes/canicule";
import Politique from "./routes/politique";
import Ukraine from './routes/ukraine';
import Inflation from './routes/inflation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="canicule" element={<Canicule />} />
        <Route path="politique" element={<Politique />} />
        <Route path="ukraine" element={<Ukraine />} />
        <Route path="inflation" element={<Inflation />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
