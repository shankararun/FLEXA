/* eslint-disable no-undef */
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './MiniNavbar.styled';

const MiniNavbar = () => {
  return (
    <> 
      <Nav>
        {/* <NavLink to='/'>
          <img src={require('')}
           alt='logo' />
        </NavLink> */}
        <Bars />
        <NavMenu>
          <NavLink to='/phones' activeStyle>
            Mobile phones
          </NavLink>
          <NavLink to='/furtinures' activeStyle>
            Furtinures
          </NavLink>
          <NavLink to='/laptops' activeStyle>
            Laptops
          </NavLink>
          <NavLink to='/accessories' activeStyle>
            Accessories
          </NavLink>
          <NavLink to='/cameras' activeStyle>
            Cameras and Lens
          </NavLink>
          <NavLink to='/cycle' activeStyle>
            Bicycle
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default MiniNavbar;
