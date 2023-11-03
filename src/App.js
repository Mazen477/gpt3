import React from 'react'
import { Brand,Cta,Navbar } from './components';
import { Footer, Blog,  Features, Possibillity, WhatGPT3, Header } from "./containers";
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibillity />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}
export default App;