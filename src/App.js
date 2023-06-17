

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Stopwatch/header';
import Products from './components/Stopwatch/Products'

function App() {
  
  return(
    <>
  <BrowserRouter>
  <Routes>
    <Route exact path="/dashboard" element={<Header/>}/>
    <Route exact path='/products'  element={<Products/>} ></Route>
    
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;

