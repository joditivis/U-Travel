import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container
} from 'reactstrap';

export const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    <Container>
      <Navbar color="light" light expand="md">
        {/* <NavbarBrand href="/">U Travel</NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Flights</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Hotels</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Cars</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Things To Do</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Account
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Log In
                </DropdownItem>
                <DropdownItem>
                  Create Account
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      </Container>
    </div>
  );
}

export default NavBar;