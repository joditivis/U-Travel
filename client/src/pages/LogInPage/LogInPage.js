import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import './style.css';

class LogInPage extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // Set state to a user's username and password
    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios.post('/user/login', {
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // Update state to logged in
                    this.props.updateUser({
                        loggedIn: true,
                        email: response.data.email
                    })
                    // Update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
          return (
            <Container>
            <br></br>
              <h2 className="login-header">Log In</h2>
              <Form className="login-form">
                <Row form>
                  <Col md={4}>
                  <hr></hr>
                    <FormGroup>
                      <Label className="login-form-label" for='userEmail'>Email</Label>
                      <Input 
                        type='email' 
                        name='email' 
                        id='userEmail' 
                        placeholder='johndoe@example.com'
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label className="login-form-label" for='userPassword'>Password</Label>
                      <Input 
                        type='password' 
                        name='password' 
                        id='userPassword' 
                        placeholder='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <br></br>
                    <Button 
                      className='login-btn'
                      onClick={this.handleSubmit}
                      type='submit'>
                      Log In
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          );
        }
    }
}

export default LogInPage;