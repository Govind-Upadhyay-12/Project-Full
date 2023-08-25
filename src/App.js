import React from 'react';
import './App.scss';
import Header from './NavBar/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} />
       </Routes>
    </BrowserRouter>
  );
}
export default App

