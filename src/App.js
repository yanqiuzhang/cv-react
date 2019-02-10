import React from 'react';
import './App.css';
import Header from "../src/Component/Header";
import Body from "../src/Component/Body";
import Footer from "../src/Component/Footer";
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <div className="header-div">
        <Header />
      </div>
      <div className="body-div">
        <Link to='/'><Body /></Link>     
      </div>
      <div className="footer-div">
      <Footer />
      </div>
    </div>

  );
}

export default App;
