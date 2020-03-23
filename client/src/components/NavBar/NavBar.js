import React, { Component } from "react";
import axios from "axios";
import {
  // Collapse,
  Navbar,
  // NavbarToggler,
  // NavbarBrand,
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

// const NavbarComponent = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);


class NavbarComponent extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log("logging out")
        axios
          .post("/user/logout")
          .then(response => {
            console.log(response.data)
            if (response.status === 200) {
              this.props.updateUser({
                loggedIn: false,
                email: null,
                userId: null,
                tripID: null
              });
            }
          })
          .catch(error => {
            console.log("Logout error")
          });
      }
  

  render() {
 
    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <div>
        <Container>
          <Navbar className="navbar" expand="sm">
          {/* <NavbarBrand href="#"></NavbarBrand>
            <NavbarToggler className="navbaricon" onClick={toggle} />
            <Collapse isOpen={isOpen} navbar> */}
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
                        <Link to={`/`} className="nav-link-dark">
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

export default NavbarComponent;
