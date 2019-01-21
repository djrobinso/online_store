import React from 'react';
import Router from './Router';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (

  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <a class="navbar-brand" href="#">ATHENS</a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#"> <NavLink to='/'>Home</NavLink></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><NavLink to='/cart'>MyCart</NavLink></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><NavLink to='./login'>Log In</NavLink></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href='#'><NavLink to='./sign_up'>Sign Up</NavLink></a>
      </li>
    </ul>
  </nav>

  )
}

export default Navbar
