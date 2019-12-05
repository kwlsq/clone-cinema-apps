import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import './NavbarItself.css';
import { Link } from "react-router-dom";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar className="navbar-itself"  light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto nav" navbar>
            <NavItem>
              <NavLink>Now Playing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Upcoming</NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/theater">Theaters</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Promotions</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Info 21
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Movie News
                </DropdownItem>
                <DropdownItem>
                  New Openings
                </DropdownItem>
                <DropdownItem>
                  Quizzess
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;