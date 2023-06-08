import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from 'reactstrap';

function Example(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Nav tabs justified className='transparent-nav-tabs'>
      <NavItem>
        <NavLink href="#" >
          Gündem
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
          Son Dakika
        </NavLink>
      </NavItem>
    
      <NavItem>
        <NavLink href="#">
          İş İlanları
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
          Kayıp İlanları
        </NavLink>
      </NavItem>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret>
          Giriş Yap/Kaydol
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Giriş Yap</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Kaydol</DropdownItem>
        </DropdownMenu>
      </Dropdown>
     
     
      
    </Nav>
  );
}

export default Example;