import React, { useState, Component } from "react";
import axios from "axios";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from "reactstrap";
import { Link } from "react-router-dom";
import "./style.css";

class NavbarComponent extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(error => {
        console.log("Logout error");
      });
  }

  // Navbar dropdown toggler
  isOpen(event) {
    event.preventDefault();
    useState(false);
  }
  setIsOpen(event) {
    event.preventDefault();
    useState(false);
  }
  toggle(event) {
    event.preventDefault();
    this.setIsOpen(!this.isOpen);
  }

  render() {

    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <div>
        <Container>
          <Navbar className="navbar" expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={false} navbar>
              <Nav className="mr-auto nav" navbar>
                <NavItem>
                  <Link to={`/`} className="nav-link">
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to={`/flightSearchPage`} className="nav-link">
                    Flights
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to={`/hotelSearchPage`} className="nav-link">
                    Hotels
                  </Link>
                </NavItem>
                {/* <NavItem>
                  <Link to={`/#`} className="nav-link">Cars</Link>
                </NavItem> */}
                {/* <NavItem>
                  <Link to={`/#`} className="nav-link">Things To Do</Link>
                </NavItem> */}

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Account
                  </DropdownToggle>


                   {loggedIn ? (
                    <DropdownMenu left>
                      <DropdownItem>
                          <Link to={`/userpage`} className="nav-link-dark">
                          My Trip
                          </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to={`/`} className="nav-link-dark" onClick={this.logout}>
                        Logout
                        </Link>
                      </DropdownItem>
                    </DropdownMenu left>
                  ) : (
                    <DropdownMenu left>
                      <DropdownItem>
                        <Link to={`/login`} className="nav-link-dark">
                          Log In
                        </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to={`/createaccount`} className="nav-link-dark">
                          Create Account
                        </Link>
                      </DropdownItem>
                    </DropdownMenu>
                  )}
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
