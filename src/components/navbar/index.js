import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Logo from './logo.png';
import './navbar.css';

const NavBar = () => {
  return (
    <div>
        <Navbar bg='myColor' variant='light' sticky='top' expand='md' collapseOnSelect>
            <NavbarBrand><img src={Logo} alt="Autoshop-logo" className='navbar-logo'/></NavbarBrand>
            <NavbarToggle/>
            <NavbarCollapse>
                <Nav>
                    <NavLink href='#home'>Home</NavLink>
                    <NavLink href='#about'>Nosotros</NavLink>
                    <NavLink href='#offices'>Sucursales</NavLink>
                    <NavLink className='contact-button' href='#contact'>Contáctanos</NavLink>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    </div>
  )
}

export default NavBar