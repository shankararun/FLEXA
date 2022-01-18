/* eslint-disable no-undef */
import React from 'react';
import {
  Nav,NavLink, Bars, 
  NavMenu,NavBtn,NavBtnLink} from './Navbar.styled';

//components are imported from the navbar.styled.js file

const Navbar = () => {
  return (
    <>
      <Nav>
        {/* <NavLink to='/'>
          <img src="" alt='logo' />
        </NavLink> */}
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            <h2>Flexamarket</h2>
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Sign In</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to='/profiledashboard'>Profile</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
