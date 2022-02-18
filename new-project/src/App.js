import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import TopNav from './Component/TopNav';
import Header from "./Component/Header";
import Expert from "./Component/Expert";
import Stop from "./Component/Stop";
import Box from "./Component/Box";
import CallSecton from "./Component/CallSecton";
import CenterB from "./Component/CenterB";
import BoxSnd from "./Component/BoxSnd";
import Hlo from "./Component/Hlo";
import Footer from "./Component/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <Header />
        <Expert />
        <Stop />
        <Box />
        <CallSecton />
        <CenterB />
        <BoxSnd />
        <Hlo />
        <Footer />
      </div>
    );
  }
}

export default App;
