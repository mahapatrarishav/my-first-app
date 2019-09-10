import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header.js"
import Footer from "./Footer.js"
import MainContent from "./MainContent.js"
import LeftContent from "./LeftContent.js"
import RightContent from "./RightContent.js"

function App() {
  return (
    <div className="App">
      <Header/>
      <LeftContent /> 
      <MainContent/>
      <RightContent />
      <Footer/>
    </div>
  );
}

export default App;
