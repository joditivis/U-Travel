import React, { useState, Component } from 'react';
import axios from 'axios';
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
  DropdownItem,
  Container
} from 'reactstrap';


class NavbarComponent extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

        // Navbar dropdown toggler
        isOpen(event) {
          useState(false);
        }
        setIsOpen(event) {
          useState(false);
        }
        toggle = event => this.setIsOpen(!this.isOpen);


  render() {
        // const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

    return (
      <div>
        <Container>
          <Navbar color="light" light expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={true} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
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
                    {/* { loggedIn ? ( */}
                      <DropdownItem
                        onClick={this.logout}>
                        Logout
                      </DropdownItem>
                    {/* // ) : ( */}
                      <DropdownItem href="/login">
                        Log In
                      </DropdownItem>
                    
                      <DropdownItem href="/createaccount">
                        Create Account
                      </DropdownItem>
                    {/* // )} */}
                  </DropdownMenu>
                </UncontrolledDropdown>

              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default NavbarComponent;