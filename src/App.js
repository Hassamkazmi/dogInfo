import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './style.css'
import Home from './pages/home';
import Listing from './pages/listing';
import Detail from './pages/detail';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Search from './Components/Search';
import Ticker from './Components/Ticker';

const App = () => {
  return (
    <Fragment>
      <Ticker />
      
      <BrowserRouter>
      <Header />
      <Search />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:name" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </Fragment>
  )
}

export default App