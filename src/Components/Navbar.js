/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Nav,NavLink, Bars, 
  NavMenu,NavBtn,NavBtnLink} from './Navbar.styled';

//components are imported from the navbar.styled.js file
const logout = () => {
  window.sessionStorage.clear();
  window.location.href = '/';
}

const Navbar = () => {
  return (
    <>
      <Nav>
        {/* <NavLink to='/'>
          <img src="./FMlogo.png" alt='logo' />
        </NavLink> */}
        <Bars />
        
          <NavLink style={{color:"green"}} to='/' activeStyle>
            <h2>Flexamarket</h2>
          </NavLink>
        
        <NavMenu>
        
          <NavBtn>
            <NavBtnLink to='/' onClick={logout}>LOG OUT</NavBtnLink>
          </NavBtn>
          
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
