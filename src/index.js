// Basic tools
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages for routing
import App from './App';

// root element of the webPage
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/undefined" element={<App />} />
      <Route path="/index" Component={<App />} />
    </Routes>
  </BrowserRouter>
);