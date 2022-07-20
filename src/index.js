import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


// COMPONENTS
import NavigationBar from "./components/NavigationBar"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationBar />
    </BrowserRouter>
  </React.StrictMode>
);
