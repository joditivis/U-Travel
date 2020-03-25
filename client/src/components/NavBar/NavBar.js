import React, { Component } from "react";
import axios from "axios";
import {
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from "reactstrap";
// import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./style.css";

class NavbarComponent extends Component {
  constructor() {
    super();
    this.state = {
      logout: null
      // redirectTo: null
    };

    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then(response => {
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            email: null,
            userId: null,
            tripID: null
          });
          //   this.setState({
          //   redirectTo: '/login'
          // })
        }
      })
      .catch(error => {
        console.log("Logout error");
      });
  }

  render() {
    // if (this.state.redirectTo) {
    //       return <Redirect to={{ pathname: this.state.redirectTo }} />
    //   } else {

    const loggedIn = this.props.loggedIn;
    console.log("user login status: ", this.props.loggedIn);

    return (
      <div>
        <Container>
          <Navbar className="navbar" expand="sm">
            <Nav className="mr-auto nav" tabs>
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
                  <DropdownMenu>
                    <DropdownItem>
                      <Link to={`/userpage`} className="nav-link-dark">
                        My Trip
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link
                        to={`/login`}
                        className="nav-link-dark"
                        onClick={this.logout}
                      >
                        Logout
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                ) : (
                  <DropdownMenu>
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
            {/* </Collapse> */}
          </Navbar>
        </Container>
      </div>
    );
  }
}
// }

export default NavbarComponent;
