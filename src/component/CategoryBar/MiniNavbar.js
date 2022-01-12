/* eslint-disable no-undef */
import React from 'react';

//use styled components for styling which is imported from miniNavbar.styled

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './MiniNavbar.styled';

//Mininavabar is present under the navbar which consists the list of subcategories

const MiniNavbar = () => {
  return (
    <> 
      <Nav>
        {/* <NavLink to='/'>
          <img src={require('')}
           alt='logo' />
        </NavLink> */}
        <Bars />
    {/* consists of the list of subcategories */}
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
