/* eslint-disable no-undef */
//This file provides the Navigation Bar for each and every pages in the website
import React from 'react';
import {
  Nav,NavLink, Bars, 
  NavMenu,NavBtn,NavBtnLink} from './Navbar.styled';

const Navbar = () => {
  return (
    <>
      <Nav>
        {/* <NavLink to='/'>
          <img src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGVuZ2luZWVycmluZyUyMHBuZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt='logo' />
        </NavLink> */}
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            <h2>Flexamarket</h2>
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Sign Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
