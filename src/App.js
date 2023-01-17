import React from 'react';

import { Footer, Blog, Possibility, Info, WhatPT, Header } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient_bg">
      <Navbar />
      <Header />
    </div>
    <WhatPT />
    <Info />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;