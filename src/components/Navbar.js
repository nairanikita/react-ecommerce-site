import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import './Navbar.css';
import {ButtonContainer} from './Button';
import styled from "styled-components";

export default class Navbar extends Component {
    render() {
        return (
           <Navwrap className="navbar navbar-expand-sm navbar-dark nav2 px-sm-5">
           <Link to='/'>
           <img src={logo} alt="store"
           className="navbar-brand logo"/>
           </Link>
           <ul className="navbar-nav align-items-center">
           <li className="nav-item ml-5">
           <Link to="/" className="nav-Link">
           PRODUCTS
           </Link>
           </li>
           </ul>
           <Link to="/cart" className="ml-auto">
           <ButtonContainer>
               <i className="fas fa-shopping-cart"/>  MY CART
           </ButtonContainer>
           </Link>
           </Navwrap> 
        )
    }
}
const Navwrap=styled.nav`
background:var(--mainBlue);
height:5rem;
size:4rem;
.logo{
    height:5rem;
}
.nav-Link{
    color:var(--mainWhite)!important;
      font-size:1.3rem;  
       text-transform:capitalize!important;
}
`;





