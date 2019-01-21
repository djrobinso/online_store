import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Router, Route, IndexRoute, BrowserRouter, browserHistory} from 'react-router-dom';
import './App.css';

//import the other parts of the website
import Home from './components/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Router from './components/Router';


class App extends Component {
  render() {
    return (

      <div className="page-container">

        <Navbar />

        <Router />

        <Footer />

      </div>

    );
  }
}

export default App;
