import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, Container, Card, CardHeader, CardBody } from 'reactstrap';
import './style.css';
import { Link } from 'react-router-dom';

class LogInPage extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            redirectTo: null
            // incorrectEmail: '',
            // incorrectPassword: ''
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
                username: this.state.email,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ', response)
                if (response.status === 200) {
                    // Update state to logged in
                    console.log(response.data);
                    this.props.updateUser({
                        loggedIn: true,
                        email: response.data.email,
                        userId: response.data.id
                    })
                    // Update the state to redirect to home
                    this.setState({
                        redirectTo: '/userpage'
                    })
                }
                // } else {
                //   let incorrectEmail = response.data.error ? response.data.email : ''
                //   let incorrectPassword = response.data.error ? response.data.password : ''

                //   this.setState({
                //     incorrectEmail : incorrectEmail,
                //     incorrectPassword : incorrectPassword
                //   })
                // }
            }).catch(error => {
                console.log('Login Error: ', error);

            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
          return (
            <Container>
              <Card className='login-card'>
                <CardHeader className='login-header'>
                  Log In
                </CardHeader>
                  <CardBody className='login-body'>
                    <Form className="login-form">
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
                          <br></br>
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
                          <br></br>
                      <hr></hr>
                      <p className='no-account'>Don't have an account? <Link to={`/createaccount`} className='create-act-link'> Create Account </Link> </p>
                    </Form>
                  </CardBody>
                </Card>
            </Container>
          );
        }
    }
}

export default LogInPage;