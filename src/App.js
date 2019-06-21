import React, { Component } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import router from './router';
import Navbar from './Components/Navbar/Navbar';


class App extends Component {

 
  render() {

    return (
      <HashRouter>
        <Navbar />
        {router}
      </HashRouter>
    );
  }
}

export default App;
